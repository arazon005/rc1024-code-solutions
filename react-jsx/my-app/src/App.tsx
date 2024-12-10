import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../../../../../vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React JSX</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Total Button Clicks: {count}
        </button>
        <p>
          JSX is a JavaScript extension that allows developers to write the code
          for dynamic DOM creation in a syntax that is very similar to standard
          HTML.
        </p>
        <p></p>
      </div>
      <p>
        JSX is a JavaScript extension that allows developers to write the code
        for dynamic DOM creation in a syntax that is very similar to standard
        HTML.
      </p>
      <p>
        React returns JSX markup to construct the DOM to be displayed on a
        browser page.
      </p>
    </>
  );
}

export default App;
