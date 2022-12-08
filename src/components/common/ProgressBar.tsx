export function ProgressBar(props: ProgressBarProps) {
  const { percent } = props;
  return (
    <progress
      className="progress progress-primary w-full"
      value={percent.toString()}
      max="100"
    />
  );
}
