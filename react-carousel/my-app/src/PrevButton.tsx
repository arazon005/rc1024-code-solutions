import { FaArrowLeft } from 'react-icons/fa';

type Props = {
  clickHandler: () => void;
};

export function PrevButton({ clickHandler }: Props) {
  return <FaArrowLeft onClick={clickHandler} />;
}
