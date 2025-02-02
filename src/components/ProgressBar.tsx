'use client';
interface ProgressBarProps {
  current: number;
  total: number;
}
export function ProgressBar({current, total}: ProgressBarProps) {
  const progress = (current / total) * 100;
  return (
    <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-700">
      <div
        className="h-2.5 rounded-full bg-primary-600 transition-all duration-500 ease-out dark:bg-primary-400"
        style={{width: `${progress}%`}}
      />
    </div>
  );
}
