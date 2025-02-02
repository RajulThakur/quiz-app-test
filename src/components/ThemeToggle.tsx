"use client";

import MoonIcon from "@/icons/Moon";
import SunIcon from "@/icons/Sun";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className='rounded-lg bg-white p-2 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800'
      aria-label='Toggle theme'>
      {isDark ? (
        <SunIcon className='h-6 w-6 text-yellow-500' />
      ) : (
        <MoonIcon className='h-6 w-6 text-blue-600' />
      )}
    </button>
  );
}
