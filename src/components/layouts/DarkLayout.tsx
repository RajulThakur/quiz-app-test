'use client';
import {ThemeProvider} from '@/components/providers/theme-provider';
import {ReactNode} from 'react';

export function DarkLayout({children}: {children: ReactNode}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
