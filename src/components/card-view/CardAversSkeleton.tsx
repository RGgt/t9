export function CardAversSkeleton() {
  return (
    <div
      role="button"
      tabIndex={0}
      className="absolute m-auto flex h-full w-full animate-pulse items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-t from-gray-700 to-gray-400 p-0  text-center text-slate-100 shadow-lg backface-hidden"
    >
      <div>&nbsp;</div>
    </div>
  );
}
