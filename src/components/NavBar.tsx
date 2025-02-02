import TrophyIcon from '@/icons/Trophy';
import FireIcon from '@/icons/Flame';
import LoginIcon from '@/icons/Login';
import {ThemeToggle} from './ThemeToggle';
import Link from 'next/link';
import UserPlusIcon from '@/icons/UserPlus';

interface NavBarProps {
  streak: number;
  rank: string;
}

export function NavBar({streak, rank}: NavBarProps) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-white px-4 shadow-md dark:bg-gray-800 sm:px-6">
      <div className="flex items-center">
        <TrophyIcon className="mr-2 text-yellow-500" />
        <span className="font-semibold text-gray-900 dark:text-white">Rank: {rank}</span>
      </div>

      <div className="flex w-auto items-center space-x-4">
        <div className="flex items-center">
          <FireIcon className="mr-2 text-orange-500" />
          <span className="font-semibold text-gray-900 dark:text-white">{streak} Day</span>
        </div>
        <Link
          href="/auth/signin"
          className="rounded-lg px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30">
          <LoginIcon className="mr-1 inline h-4 w-4" />
          Sign In
        </Link>
        <Link
          href="/auth/signup"
          className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          <UserPlusIcon className="mr-1 h-4 w-4" />
          Sign Up
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
