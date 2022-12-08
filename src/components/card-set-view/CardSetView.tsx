import { useState, useRef } from 'react';

import { ProgressBar } from '../common/ProgressBar';
import { CancelButton } from '../common/CancelButton';
import { CardView } from '../card-view/CardView';

export function CardSetView(props: CardSetViewProps) {
  const {
    // myKey,
    // topicId,
    // collectionId,
    // handId,
    allCards,
    allScores,
    onClosing,
    onCompleted,
  } = props;
  const realScores = useRef(allScores);
  const [crtCardId, setCrtCardId] = useState(allCards[0].cardId);
  const [progress, setProgress] = useState(0);
  const rateCard = (cardId: string, rating: number) => {
    const index = realScores.current.findIndex((x) => x.cardId === cardId);
    if (index < 0) {
      throw new Error('Invalid card id!');
    }
    realScores.current[index].score = rating;
    if (index + 1 === allScores.length) {
      // finished! we rated the last card!
      onCompleted();
    } else {
      // there are more card to rate. let's pick the next
      const nextCard = realScores.current[index + 1].cardId;
      const scoredCards = realScores.current.reduce(
        (total, e) => (e.score === -1 ? total : total + 1),
        0,
      );
      const percentCardsScored = Math.round(
        (100 * scoredCards) / allCards.length,
      );
      setCrtCardId(nextCard);
      setProgress(percentCardsScored);
    }
  };
  const crtCardData = allCards.find((x) => x.cardId === crtCardId);
  if (!crtCardData) {
    throw new Error('Invalid card id!');
  }
  const crtCardScore = realScores.current.find(
    (x) => x.cardId === crtCardId,
  )?.score;
  if (!crtCardScore) {
    throw new Error('Invalid card id!');
  }
  // const printDebug = () => {
  //   return (
  //     <>
  //       <ProgressBar percent={progress} />
  //       <p>myKey: {myKey}</p>
  //       <p>topicId: {topicId}</p>
  //       <p>collectionId: {collectionId}</p>
  //       <p>handId: {handId}</p>
  //       <p>crtCardId: {crtCardId}</p>
  //       <p>progress: {progress}</p>
  //       <p>crtCardData: {JSON.stringify(crtCardData)}</p>
  //       <p>onCompleted: {onCompleted.toString()}</p>
  //       <p>onClosing: {onClosing.toString()}</p>
  //       <div
  //         className="btn-primary btn w-96"
  //         role="button"
  //         onClick={() => rateCard(crtCardId, 1)}
  //         tabIndex={0}
  //       >
  //         Rate 1
  //       </div>
  //     </>
  //   );
  // };

  return (
    <div className="flex h-screen w-screen flex-col bg-slate-700 p-0">
      <div className="navbar items-center justify-center bg-transparent p-0">
        <div className="flex w-2/3 flex-row items-center justify-center bg-slate-700 p-0">
          <div className="flex w-fit items-start justify-start  bg-slate-700 p-0 text-white">
            <CancelButton callback={onClosing} />
          </div>
          <div className="flex w-full items-center justify-end bg-slate-700 pl-8">
            <ProgressBar percent={progress} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-slate-700">
        <div className="flex h-2/3 w-2/3 items-center justify-center rounded-2xl bg-slate-700  shadow-lg">
          <CardView
            cardData={crtCardData}
            rateCard={rateCard}
            key={crtCardId}
            prevScore={crtCardScore}
          />
        </div>
      </div>
    </div>
  );
}
