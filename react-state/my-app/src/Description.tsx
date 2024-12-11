import { useState } from 'react';

type Props = {
  text: string[];
};
export function Description({ text }: Props) {
  const [index, setIndex] = useState(0);
  return <p onClick={() => setIndex(index + 1)}>{text[index]}</p>;
}
