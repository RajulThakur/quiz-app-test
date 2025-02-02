'use server';

import {signIn, signOut} from './auth';
import {createUser} from './dataService';
import {AuthError} from 'next-auth';

export async function signInActionGoogle() {
  await signIn('google', {redirectTo: '/menu/contest'});
}

export async function signOutAction() {
  await signOut({redirect: true, redirectTo: '/auth/signin'});
}

export async function credentialsSignUpAction(email: string, password: string, name: string) {
  try {
    await createUser({
      email,
      name,
      password,
    });
    return {success: true};
  } catch (error: any) {
    console.error('Signup error:', error);
    return {success: false, error: 'User already exists', errorCode: 'USER_ALREADY_EXISTS'};
  }
}

export async function credentialsSignInAction(email: string, password: string) {
  try {
    await signIn('credentials', {email, password, redirect: true, redirectTo: '/menu/contest'});
    return {success: true};
  } catch (error: any) {
    console.error('Signin error:', error);
    console.log('error', error.message);
    return {success: false, error: error.message, errorCode: error.code};
  }
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirectTo: '/menu/contest',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signInWithGoogle() {
  await signIn('google', {redirectTo: '/menu/contest'});
}
