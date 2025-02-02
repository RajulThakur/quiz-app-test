"use client";
import React, { useState } from "react";
import LockIcon from "@/icons/Lock";
import MailIcon from "@/icons/Mail";
import UserIcon from "@/icons/User";
import UserPlus from "@/icons/UserPlus";
import ArrowLeft from "@/icons/ArrowLeft";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";
import { credentialsSignUpAction, signInActionGoogle } from "@/lib/action";
import { signUpSchema } from "@/schema/zodSchema";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const { error } = await signUpSchema.safeParseAsync({
        email,
        password,
        name,
      });
      if (error) {
        console.log("error", error.errors[0].message);
        setError(error.errors[0].message);
        return;
      }
      const result = await credentialsSignUpAction(email, hashedPassword, name);
      console.log("result", result);
      if (result.success) {
        router.push("/auth/signin");
      } else {
        setError(result.error || "Failed to create account. Please try again.");
      }
    } catch (err) {
      if (err instanceof Error && err.message.includes("Unique constraint")) {
        setError("This email is already registered");
      } else {
        setError("Failed to create account. Please try again.");
      }
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
              <UserPlus className='h-8 w-8 text-blue-600 dark:text-blue-400' />
            </div>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
              Create Account
            </h1>
            <p className='mt-2 text-gray-500 dark:text-gray-400'>
              Join our quiz community and start your journey
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
            onSubmit={handleSubmit}
            className='space-y-6'>
            {error && (
              <div className='rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/50 dark:text-red-400'>
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor='name'
                className='mb-1 block text-sm font-medium text-gray-900 dark:text-gray-300'>
                Full Name
              </label>
              <div className='relative'>
                <UserIcon className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400' />
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400'
                  placeholder='John Doe'
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='mb-1 block text-sm font-medium text-gray-900 dark:text-gray-300'>
                Email
              </label>
              <div className='relative'>
                <MailIcon className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400' />
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400'
                  placeholder='you@example.com'
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='mb-1 block text-sm font-medium text-gray-900 dark:text-gray-300'>
                Password
              </label>
              <div className='relative'>
                <LockIcon className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400' />
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400'
                  placeholder='••••••••'
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-800'>
              {isLoading ? (
                <div className='flex items-center justify-center space-x-2'>
                  <svg
                    className='h-5 w-5 animate-spin text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'>
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className='mt-8 text-center'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Already have an account?{" "}
              <Link
                href='/auth/signin'
                className='font-medium text-blue-600 hover:underline dark:text-blue-400'>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
