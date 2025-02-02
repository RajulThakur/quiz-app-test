export function QuizSkeleton() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Question skeleton */}
      <div className="mb-8 animate-pulse">
        <div className="mb-4 h-6 w-24 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-4 h-20 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>

      {/* Options skeleton */}
      <div className="animate-pulse space-y-4">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="flex items-center space-x-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-6 flex-1 rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
