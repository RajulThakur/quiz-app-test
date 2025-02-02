import {PrismaAdapter} from '@auth/prisma-adapter';
import NextAuth, {CredentialsSignin, Session} from 'next-auth';
import Google from 'next-auth/providers/google';
import {createUser, getUserByEmail} from './dataService';
import bcrypt from 'bcryptjs';
import {AdapterUser} from 'next-auth/adapters';
import Credentials from 'next-auth/providers/credentials';
import {signInSchema} from '@/schema/zodSchema';
import {prisma} from '@/lib/prisma';
interface UserIdSession extends Session {
  user: AdapterUser & {guestID?: string};
}
class InvalidLoginError extends CredentialsSignin {
  code = 'Invalid email or password';
}
class EmptyLoginError extends CredentialsSignin {
  code = 'Provide both email and password';
}

export const {handlers, signIn, signOut, auth} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'text'},
        password: {label: 'Password', type: 'password'},
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new EmptyLoginError();
          }

          const {email, password} = await signInSchema.parseAsync({
            email: credentials.email,
            password: credentials.password,
          });

          const user = await getUserByEmail(email);
          if (!user?.password) {
            throw new InvalidLoginError();
          }

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            throw new InvalidLoginError();
          }

          return user;
        } catch (error) {
          if (error instanceof CredentialsSignin) throw error;
          console.error('Authorization error:', error);
          throw new InvalidLoginError();
        }
      },
    }),
  ],
  callbacks: {
    async signIn({user, account}) {
      if (!user.email) return false;
      try {
        if (account?.provider === 'credentials') {
          return true;
        }

        if (account?.provider === 'google') {
          const existingUser = await getUserByEmail(user.email);
          if (existingUser) return true;

          await createUser({
            email: user.email,
            name: user.name ?? '',
            image: user.image ?? '',
            googleId: user.id ?? '',
          });
          return true;
        }

        return false;
      } catch (error) {
        console.error('Sign-in error:', error);
        return false;
      }
    },

    async session({session}: {session: UserIdSession}) {
      if (!session.user.email) return session;

      const user = await getUserByEmail(session.user.email);
      if (user) {
        session.user.guestID = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});
