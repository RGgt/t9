import React from 'react';

export function CancelButton(props: CancelButtonProps) {
  const { callback } = props;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Esc') {
      callback();
      return;
    }
  };
  const onClick = () => {
    callback();
  };

  return (
    <div className="tooltip tooltip-left" data-tip="Quit to deck">
      <div
        role="button"
        onClick={onClick}
        onKeyPress={handleKeyPress}
        className="btn-ghost  btn-square btn h-12 w-12"
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}
