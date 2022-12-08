import { CardViewSkeleton } from '../card-view/CardViewSkeleton';
import { ButtonSkeleton } from '../common/ButtonSkeleton';
import { ProgressBarSkeleton } from '../common/ProgressBarSkeleton';

export function CardSetViewSkeleton() {
  return (
    <div className="flex h-screen w-screen flex-col bg-slate-700 p-0">
      <div className="navbar items-center justify-center bg-transparent p-0">
        <div className="flex w-2/3 flex-row items-center justify-center bg-slate-700 p-0">
          <div className="flex w-fit items-start justify-start  bg-slate-700 p-0 text-white">
            <ButtonSkeleton />
          </div>
          <div className="flex w-full items-center justify-end bg-slate-700 pl-8">
            <ProgressBarSkeleton />
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-slate-700">
        <div className="flex h-2/3 w-2/3 items-center justify-center rounded-2xl bg-slate-700  shadow-lg">
          <CardViewSkeleton />
        </div>
      </div>
    </div>
  );
}
