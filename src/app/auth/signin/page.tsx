'use client';
import React, {useState} from 'react';
import LockIcon from '@/icons/Lock';
import MailIcon from '@/icons/Mail';
import {credentialsSignInAction} from '@/lib/action';
import {signInSchema} from '@/schema/zodSchema';
import {useRouter} from 'next/navigation';

export default function SignIn() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  return (
    <form
      action={async (formData: FormData) => {
        try {
          const email = formData.get('email') as string;
          const password = formData.get('password') as string;
          const {error} = await signInSchema.safeParseAsync({email, password});
          if (error) {
            console.log('error', error.errors[0].message);
            setError(error.errors[0].message);
            return;
          }
          const result = await credentialsSignInAction(email, password);
          console.log('result', result);
          if (result.success) {
            router.push('/menu/contest');
          } else {
            setError(result.errorCode);
          }
        } catch (error) {
          console.log('error', error);
          setError('Failed to sign in. Please try again.');
        }
      }}
      className="space-y-6">
      {error && <div className="text-sm text-red-500">{error}</div>}

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <div className="relative">
          <MailIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          <input
            type="email"
            name="email"
            id="email"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <div className="relative">
          <LockIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          <input
            type="password"
            name="password"
            id="password"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
            placeholder="••••••••"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-800">
        Sign In
      </button>
    </form>
  );
}
