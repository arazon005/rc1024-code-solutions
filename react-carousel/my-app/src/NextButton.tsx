import { FaArrowRight } from 'react-icons/fa';

type Props = {
  clickHandler: () => void;
};

export function NextButton({ clickHandler }: Props) {
  return <FaArrowRight onClick={clickHandler} />;
}
