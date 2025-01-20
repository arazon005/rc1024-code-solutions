import './Image.css';
import { useState } from 'react';

type Props = {
  src: string[];
};

export function Image({ src }: Props) {
  const [index, setIndex] = useState(0);
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={() => setIndex(index + 1)}
          className="image-fill"
          src={src[index]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
