export function CardOptionsAreaSpaceReserve(props: CardOptionsAreaProps) {
  const { cardId, onCardRated, toggleFlipped, showRating, showFlipCard } =
    props;
  if (!showRating && !showFlipCard) return null;
  return (
    <>
      <br />
      <div
        className="btn-info btn-circle btn invisible m-1.5 h-16 w-16"
        role="button"
        tabIndex={0}
      >
        &nbsp;
      </div>
    </>
  );
}
