import { useState } from 'react';
type Props = {
  caption: string[];
};

export function Caption({ caption }: Props) {
  const [index, setIndex] = useState(0);
  return <h3 onClick={() => setIndex(index + 1)}>{caption[index]}</h3>;
}
