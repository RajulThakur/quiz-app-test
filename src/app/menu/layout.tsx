'use client';
import {NavBar} from '@/components/NavBar';
import {Tab} from '@/components/Tab';
import {DarkLayout} from '@/components/layouts/DarkLayout';
import { SessionProvider } from 'next-auth/react';

export default function QuizLayout({children}: {children: React.ReactNode}) {
  return (
    <SessionProvider>
    <DarkLayout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 transition-colors duration-200 dark:from-gray-900 dark:to-gray-800">
        <NavBar
          streak={0}
          rank="1"
        />
        <div className="mx-auto h-dvh max-w-7xl px-2 pt-20 sm:px-6 lg:px-8">
          {/* Enhanced Tab Navigation */}
          <Tab />
          {/* Content with Fade Transition */}
          <div className="py-4 transition-opacity duration-300 sm:py-8">{children}</div>
          </div>
        </div>
      </DarkLayout>
    </SessionProvider>
  );
}
