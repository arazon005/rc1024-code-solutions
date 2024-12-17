import { Image } from './App';
import { useState, useEffect } from 'react';
import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { ImageCard } from './ImageCard';
import './Carousel.css';

type Props = {
  images: Image[];
};

export default function Carousel({ images }: Props) {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    const progressTimer = setInterval(nextButtonClick, 2000);
    return () => clearInterval(progressTimer);
  });
  function prevButtonClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  }
  function nextButtonClick() {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function indexButtonClick(index: number) {
    setIndex(index);
  }
  return (
    <div className={'carousel'}>
      <PrevButton clickHandler={prevButtonClick} />
      <ImageCard
        images={images}
        index={index}
        clickHandler={indexButtonClick}
      />
      <NextButton clickHandler={nextButtonClick} />
    </div>
  );
}
