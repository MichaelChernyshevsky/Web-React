import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4">
      <h1 className="text-xl">Counter (useState)</h1>
      <p>Используется для управления состоянием в функциональных компонентах.</p>
      <h2>Current Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Increase
      </button>
      <button onClick={() => setCount(count - 1)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Decrease
      </button>
    </div>
  );
};

export default Counter;
