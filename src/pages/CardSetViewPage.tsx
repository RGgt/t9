import { useParams, useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { CardSetViewError } from '../components/card-set-view/CardSetViewError';
import useFetch from '../hooks/useFetch';
import { CardSetViewSkeleton } from '../components/card-set-view/CardSetViewSkeleton';
import { CardSetView } from '../components/card-set-view/CardSetView';

const getErrorView = (
  error: Error,
  onClosing: () => void,
  progress: number,
) => {
  return (
    <CardSetViewError error={error} onClosing={onClosing} progress={progress} />
  );
};
const getLoadingView = () => {
  return <CardSetViewSkeleton />;
};
const getCardSetView = (
  key: string,
  topicId: string,
  collectionId: string,
  setId: string,
  allCards: HandCardData[],
  allScores: HandScoreData[],
  onClosing: () => void,
  onCompleted: () => void,
) => {
  return (
    <CardSetView
      key={key}
      myKey={key}
      topicId={topicId}
      collectionId={collectionId}
      handId={setId}
      allCards={allCards}
      allScores={allScores}
      onClosing={onClosing}
      onCompleted={onCompleted}
    />
  );
};

export function CardSetViewPage() {
  const navigate = useNavigate();
  const onClosing = () => {
    navigate('/');
  };
  const onCompleted = () => {
    navigate('/');
  };

  const {
    topic: topicId,
    collection: collectionId,
    hand: handId,
  } = useParams() as { topic: string; collection: string; hand: string };

  const FETCH_URL = `decks/${topicId}/${collectionId}/${handId}.json`;
  const { data, error } = useFetch<HandCardData[]>(FETCH_URL);

  if (error) return getErrorView(error, onClosing, 0);
  if (!data) return getLoadingView();
  if (!data || !data.length)
    return getErrorView(new Error('Empty list!'), onClosing, 0);

  const allCards = _.shuffle(data);

  const allScores = allCards.map((x) => {
    return { cardId: x.cardId, score: -1 };
  });

  const key = `${topicId}---${collectionId}---${handId}`;
  return getCardSetView(
    key,
    topicId,
    collectionId,
    handId,
    allCards,
    allScores,
    onClosing,
    onCompleted,
  );
}
