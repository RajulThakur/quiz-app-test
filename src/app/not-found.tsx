'use client';
import Brain from '@/icons/Brain';
import HomeIcon from '@/icons/Home';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="dark:from-primary-950 flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 p-4 dark:to-primary-900">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-primary-100 p-3 dark:bg-primary-800">
            <Brain className="h-12 w-12 text-primary-600 dark:text-primary-400" />
          </div>
        </div>

        <h1 className="mb-4 text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-foreground dark:text-primary-50">
          Page Not Found
        </h2>
        <p className="text-foreground/70 mx-auto mb-8 max-w-md dark:text-primary-200/70">
          Oops! The page you&apos;re looking for seems to have wandered off. Let&apos;s get you back
          to the quiz!
        </p>

        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-surface-50 shadow-lg transition-all duration-200 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600">
          <HomeIcon
            size="md"
            className="mr-2"
          />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
