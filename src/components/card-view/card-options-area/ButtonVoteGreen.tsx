import { IconVoteGreen } from './IconVoteGreen';

export function ButtonVoteGreen(props: CardOptionAreaButtonProps) {
  const { onClick, handleKeyPress, visible } = props;
  if (!visible) return null;
  return (
    <div
      className="btn-outline btn-success glass btn-circle btn absolute left-3/4 h-16 w-16 shadow-lg shadow-slate-800"
      role="button"
      onClick={onClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
    >
      <IconVoteGreen />
    </div>
  );
}
