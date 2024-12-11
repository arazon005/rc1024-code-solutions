type Props = {
  label: string;
  onCaptionClick: () => void;
};
export function Button({ label, onCaptionClick }: Props) {
  return <button onClick={onCaptionClick}>{label}</button>;
}
