import { useState } from 'react';
import { Button } from './Button.tsx';
import './App.css';

let pointer: number = 0;

function App() {
  const [count, setCount] = useState(1);
  const styles = ['freeze', 'cold', 'warm', 'hot', 'burning', 'fire'];
  function handleClick() {
    if (count <= 3) {
      pointer = 0;
    } else if (count <= 6) {
      pointer = 1;
    } else if (count <= 9) {
      pointer = 2;
    } else if (count <= 12) {
      pointer = 3;
    } else if (count <= 15) {
      pointer = 4;
    } else if (count <= 18) {
      pointer = 5;
    }
    setCount(count + 1);
  }
  return (
    <>
      <Button style={styles[pointer]} onButtonClick={handleClick} />
    </>
  );
}

export default App;
