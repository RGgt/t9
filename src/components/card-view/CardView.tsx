import { useRef } from 'react';
import { CardReverse } from './CardReverse';
import { CardAvers } from './CardAvers';
import './CardView.css';

export function CardView(props: CardViewProps) {
  const { cardData, prevScore, rateCard } = props;
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

  return (
    <div className="card-typography perspective-100vw h-full w-full flex-1 overflow-hidden ">
      <div
        className="flip-content relative h-full w-full"
        role="button"
        tabIndex={0}
        ref={clickableFace}
      >
        <CardAvers
          cardId={cardData.cardId}
          avers={cardData.avers}
          toggleFlipped={toggleFlipped}
        />
        <CardReverse
          cardId={cardData.cardId}
          revers={cardData.revers}
          score={prevScore}
          showRating
          showFlipCard
          onCardRated={rateCard}
          toggleFlipped={toggleFlipped}
        />
      </div>
    </div>
  );
}
