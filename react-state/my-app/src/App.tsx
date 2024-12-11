import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = ['/starry-sky.jpeg', '/leaning-tower.jpg', '/torii-gates.jpg'];
const captions = [
  'A Beautiful Image of Space',
  'An Image of The Leaning Tower',
  'An Image of Torii Gates',
];
const descriptions = [
  'The stars are quite beautiful.',
  'One of the wonders of the world.',
  'There are many of these in Japan.',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={srcs} />
      <Caption caption={captions} />
      <Description text={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
