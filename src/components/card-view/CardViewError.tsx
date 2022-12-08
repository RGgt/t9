import { useRef } from 'react';
import { CardReverse } from './CardReverse';
import { CardAversError } from './CardAversError';
import './CardView.css';

export function CardViewError(props: CardViewErrorProps) {
  const { error } = props;
  const clickableFace = useRef<HTMLInputElement>(null);
  let flipped = false;
  const toggleFlipped = () => {
    const element = clickableFace.current;
    if (!element) return;
    if (flipped) {
      element.classList.remove('flipped');
      flipped = false;
    } else {
      element.classList.add('flipped');
      flipped = true;
    }
  };
  const onCardRated = () => {};

  return (
    <div className="card-typography perspective-100vw h-full w-full flex-1  overflow-hidden ">
      <div
        className="flip-content relative h-full w-full"
        role="button"
        tabIndex={0}
        ref={clickableFace}
      >
        <CardAversError
          cardId="ERROR"
          avers={error.message}
          toggleFlipped={toggleFlipped}
        />
        <CardReverse
          cardId="ERROR"
          revers="Click the Close button to return to the deck"
          score={-1}
          showRating={false}
          showFlipCard
          onCardRated={onCardRated}
          toggleFlipped={toggleFlipped}
        />
      </div>
    </div>
  );
}
