import './Button.css';

type Props = {
  style: string;
  onButtonClick: () => void;
};

export function Button({ style, onButtonClick }: Props) {
  return (
    <button className={style} onClick={onButtonClick}>
      Hot Button
    </button>
  );
}
