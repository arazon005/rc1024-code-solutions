import { ReactElement } from 'react';
import { Image } from './App';
import { FaCircle, FaCircleNotch } from 'react-icons/fa';

type Props = {
  images: Image[];
  index: number;
  clickHandler: (index: number) => void;
};

export function ImageCard({ images, index, clickHandler }: Props) {
  const imageButtons: ReactElement[] = [];
  for (let i = 0; i < images.length; i++) {
    let element: ReactElement;
    if (i !== index) {
      element = <FaCircle onClick={() => clickHandler(i)} />;
    } else {
      element = <FaCircleNotch onClick={() => clickHandler(i)} />;
    }
    imageButtons.push(element);
  }
  return (
    <div className="imageCard">
      <div className="imageContainer">
        <img src={images[index].src} />
      </div>
      <div className="buttons">{imageButtons}</div>
    </div>
  );
}
