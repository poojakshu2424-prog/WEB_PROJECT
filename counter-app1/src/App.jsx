
import React, { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>

      <div id="count">{count}</div>

      <button className="increment" onClick={increase}>
        +
      </button>

      <button className="decrement" onClick={decrease}>
        -
      </button>

      <button className="reset" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}

export default App;