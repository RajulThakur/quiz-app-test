'use client';
import {QuizProvider} from '@/context/QuizContext';
import {QuizDataProvider} from '@/context/QuizDataContext';
import {DarkLayout} from '@/components/layouts/DarkLayout';
import {ReactNode} from 'react';

export default function QuizLayout({children}: {children: ReactNode}) {
  return (
    <DarkLayout>
      <QuizProvider>
        <QuizDataProvider>{children}</QuizDataProvider>
      </QuizProvider>
    </DarkLayout>
  );
}
