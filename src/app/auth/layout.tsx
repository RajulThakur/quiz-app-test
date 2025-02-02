'use client';
import ArrowLeft from '@/icons/ArrowLeft';
import LoginIcon from '@/icons/Login';
import UserPlus from '@/icons/UserPlus';
import { signInActionGoogle } from '@/lib/action';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export async function AuthLayout({children}: {children: ReactNode}) {
  const pathname = usePathname();
  const isSignUp = pathname.includes('signup');
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 transition-colors duration-200 dark:from-gray-900 dark:to-gray-800">
      <Link
        href="/"
        className="fixed left-4 top-4 flex items-center rounded-full bg-slate-300 px-4 py-1 font-normal text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
        <ArrowLeft
          size="md"
          strokeWidth={2}
        />
        Back to Home
      </Link>

      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
              {isSignUp ? (
                <UserPlus className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              ) : (
                <LoginIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {isSignUp ? 'Create Account' : 'Welcome back!'}
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {isSignUp
                ? 'Join our quiz community and start your journey'
                : 'Please sign in to continue your quiz journey'}
            </p>
          </div>

          {/* Google Sign In Button */}
          <form action={signInActionGoogle}>
            <button
              type="submit"
              className="mb-6 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>
          </form>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          {children}

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <Link
                href={isSignUp ? '/auth/signin' : '/auth/signup'}
                className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                {isSignUp ? 'Sign in' : 'Sign up'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
