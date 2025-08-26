import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>🔢 Interactive Counter</h2>
      <div className="counter-display">
        <div className="counter-value">{count}</div>
      </div>
      <div className="counter-controls">
        <button onClick={() => setCount(c => c + 1)}>
          ➕
        </button>
        <button onClick={() => setCount(c => c - 1)}>
          ➖
        </button>
        <button onClick={() => setCount(0)}>
          🔄 Reset
        </button>
      </div>
      <div className="counter-info">
        Current value: <strong>{count}</strong>
      </div>
    </div>
  );
}

export default Counter;
