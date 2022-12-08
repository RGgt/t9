import { ButtonFlipCard } from './ButtonFlipCard';
import { ButtonVoteGreen } from './ButtonVoteGreen';
import { ButtonVoteRed } from './ButtonVoteRed';

export function CardOptionsArea(props: CardOptionsAreaProps) {
  const { cardId, onCardRated, toggleFlipped, showRating, showFlipCard } =
    props;
  const onGreen = () => {
    onCardRated(cardId, 1);
  };
  const onRed = () => {
    onCardRated(cardId, 0);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      toggleFlipped();
      return;
    }
    if (event.key === '+') {
      onGreen();
      return;
    }
    if (event.key === '-') {
      onRed();
      return;
    }
  };
  return (
    <div className="absolute bottom-3.5 z-20 h-20 w-full -translate-x-8 transform">
      <ButtonVoteRed
        onClick={onRed}
        handleKeyPress={handleKeyPress}
        visible={showRating}
      />
      <ButtonFlipCard
        onClick={toggleFlipped}
        handleKeyPress={handleKeyPress}
        visible={showFlipCard}
      />

      <ButtonVoteGreen
        onClick={onGreen}
        handleKeyPress={handleKeyPress}
        visible={showRating}
      />
    </div>
  );
}
