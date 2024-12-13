import './RotatingBanner.css';
import { useState } from 'react';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Banner title={items[index]}></Banner>
      <Previous></Previous>
      <Navigation></Navigation>
      <Next></Next>
    </div>
  );

  type BannerProps = {
    title: string;
  };
  function Banner({ title }: BannerProps) {
    return <h1>{title}</h1>;
  }
  function handleNextClick() {
    if (index < items.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function Next() {
    return <button onClick={handleNextClick}>Next</button>;
  }
  function handlePrevClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(items.length - 1);
    }
  }
  function Previous() {
    return <button onClick={handlePrevClick}>Prev</button>;
  }

  function Navigation() {
    const buttons = [];

    for (let i = 0; i < items.length; i++) {
      let className: string = '';
      if (i === index) {
        className = 'nav active';
      } else {
        className = 'nav';
      }
      buttons.push(
        <button className={className} key={i}>
          {i}
        </button>
      );
    }
    return <div>{buttons}</div>;
  }
}
