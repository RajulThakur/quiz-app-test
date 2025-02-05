"use client";
import { useState } from "react";

export default function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center space-y-8'>
      <div className='rounded-xl bg-white p-8 shadow-xl dark:bg-gray-800'>
        <h1 className='mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white'>
          CI Test Page
        </h1>

        <div className='flex flex-col items-center space-y-4'>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Counter:{" "}
            <span className='font-bold text-blue-600 dark:text-blue-400'>
              {count}
            </span>
          </p>

          <button
            onClick={() => setCount((prev) => prev + 1)}
            className='rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600'>
            Increment
          </button>
        </div>
      </div>

      <div className='text-center text-gray-500 dark:text-gray-400'>
        This is a test page to verify CI/CD pipeline
      </div>
    </div>
  );
}
