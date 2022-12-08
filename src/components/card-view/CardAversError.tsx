import MarkdownToHtml from '../markdown/markdownToHtml';
import './CardAversError.css';

export function CardAversError(props: CardAversProps) {
  const { cardId, avers, toggleFlipped } = props;
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      toggleFlipped();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      key={cardId}
      className="absolute m-auto flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-t from-red-900 to-red-600 p-0 text-center  text-slate-100 shadow-lg backface-hidden"
      onClick={toggleFlipped}
      onKeyPress={handleKeyPress}
    >
      <div>
        <strong>Error</strong>
        <MarkdownToHtml>{avers}</MarkdownToHtml>
      </div>
    </div>
  );
}
