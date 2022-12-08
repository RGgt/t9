import './CardView.css';
import { CardAversSkeleton } from './CardAversSkeleton';

export function CardViewSkeleton() {
  return (
    <div className="card-typography perspective-100vw h-full w-full flex-1  overflow-hidden ">
      <div
        className="flip-content relative h-full w-full"
        role="button"
        tabIndex={0}
      >
        <CardAversSkeleton />
      </div>
    </div>
  );
}
