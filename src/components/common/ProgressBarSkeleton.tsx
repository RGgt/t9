export function ProgressBarSkeleton() {
  return (
    <progress
      className="progress progress-primary h-2.5 w-full animate-pulse bg-gray-200 dark:bg-gray-700"
      value={0}
      max="100"
    />
  );
}
