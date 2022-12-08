import React from 'react';

export function ButtonSkeleton() {
  return (
    <div
      className=" loading btn-square btn h-12 w-12 animate-pulse p-0"
      role="button"
    >
      &nbsp;
    </div>
  );
}
