import MarkdownToHtml from '../markdown/markdownToHtml';
import { CardOptionsArea } from './card-options-area/CardOptionsArea';
import { CardOptionsAreaSpaceReserve } from './card-options-area/CardOptionsAreaSpaceReserve';
import './CardReverse.css';

export function CardReverse(props: CardReverseProps) {
  const {
    cardId,
    revers,
    // score,
    onCardRated,
    toggleFlipped,
    showRating,
    showFlipCard,
  } = props;
  return (
    <>
      <div
        key={cardId}
        className="absolute m-auto flex h-full w-full flex-col  rounded-2xl bg-gradient-to-t from-blue-900 to-blue-600 p-0  text-slate-100 shadow-lg backface-hidden rotate-x-180"
      >
        <div
          key={cardId}
          className=" m-auto flex h-full w-full flex-col overflow-auto "
        >
          <div className="flex h-full w-full  items-center justify-center p-8 text-center">
            <MarkdownToHtml>{revers}</MarkdownToHtml>
          </div>
          <CardOptionsAreaSpaceReserve
            cardId={cardId}
            onCardRated={onCardRated}
            toggleFlipped={toggleFlipped}
            showRating={showRating}
            showFlipCard={showFlipCard}
          />
        </div>
        <CardOptionsArea
          cardId={cardId}
          onCardRated={onCardRated}
          toggleFlipped={toggleFlipped}
          showRating={showRating}
          showFlipCard={showFlipCard}
        />
      </div>
      <br />
    </>
  );
}
