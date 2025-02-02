"use client";
interface ProgressBarProps {
  current: number;
  total: number;
}
export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;
  return (
    <div className='h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
      <div
        className='h-2.5 rounded-full bg-blue-600 transition-all duration-500 ease-out dark:bg-blue-500'
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
