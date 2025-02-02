"use client";
import { useState } from "react";
import LockIcon from "@/icons/Lock";
import MailIcon from "@/icons/Mail";
import ArrowLeft from "@/icons/ArrowLeft";
import LoginIcon from "@/icons/Login";
import { credentialsSignInAction, signInActionGoogle } from "@/lib/action";
import { signInSchema } from "@/schema/zodSchema";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 transition-colors duration-200 dark:from-gray-900 dark:to-gray-800'>
      <Link
        href='/'
        className='fixed left-4 top-4 flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-900 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'>
        <ArrowLeft
          size='md'
          strokeWidth={2}
        />
        Back to Home
      </Link>

      <div className='w-full max-w-md'>
        <div className='rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800'>
          <div className='mb-8 text-center'>
            <div className='mb-4 inline-block rounded-full bg-blue-100 p-3 dark:bg-blue-900/30'>
              <LoginIcon className='h-8 w-8 text-blue-600 dark:text-blue-400' />
            </div>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
              Welcome back!
            </h1>
            <p className='mt-2 text-gray-500 dark:text-gray-400'>
              Please sign in to continue your quiz journey
            </p>
          </div>

          {/* Google Sign In Button */}
          <form action={signInActionGoogle}>
            <button
              type='submit'
              className='mb-6 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'>
              <img
                src='https://www.google.com/favicon.ico'
                alt='Google'
                className='h-5 w-5'
              />
              Continue with Google
            </button>
          </form>

          <div className='relative mb-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300 dark:border-gray-600'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400'>
                Or continue with
              </span>
            </div>
          </div>

          <form
            action={async (formData: FormData) => {
              try {
                const email = formData.get("email") as string;
                const password = formData.get("password") as string;
                const { error } = await signInSchema.safeParseAsync({
                  email,
                  password,
                });
                if (error) {
                  console.log("error", error.errors[0].message);
                  setError(error.errors[0].message);
                  return;
                }
                const result = await credentialsSignInAction(email, password);
                console.log("result", result);
                if (result.success) {
                  router.push("/menu/contest");
                } else {
                  setError(result.errorCode || "Failed to sign in. Please try again.");
                }
              } catch (error) {
                console.log("error", error);
                setError("Failed to sign in. Please try again.");
              }
            }}
            className='space-y-6'>
            {error && <div className='text-sm text-red-500'>{error}</div>}

            <div>
              <label
                htmlFor='email'
                className='mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Email
              </label>
              <div className='relative'>
                <MailIcon className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400' />
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400'
                  placeholder='you@example.com'
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Password
              </label>
              <div className='relative'>
                <LockIcon className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400' />
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400'
                  placeholder='••••••••'
                  required
                />
              </div>
            </div>

            <button
              type='submit'
              className='w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-800'>
              Sign In
            </button>
          </form>

          <div className='mt-8 text-center'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Don&apos;t have an account?{" "}
              <Link
                href='/auth/signup'
                className='font-medium text-blue-600 hover:underline dark:text-blue-400'>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
