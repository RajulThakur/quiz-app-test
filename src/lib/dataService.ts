import {CreateUserData} from '@/types/types';
import {prisma} from '@/lib/prisma';

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
        image: true,
      },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export async function createUser(data: CreateUserData) {
  try {
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        image: data?.image || '',
        googleId: data?.googleId || '',
        password: data.password,
      },
    });
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}
