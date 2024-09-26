import React, { useMemo, useState } from 'react';

const computeExpensiveValue = (num) => {
  console.log('Computing...');
  return num * 2;
};

const MemoExample = () => {
  const [num, setNum] = useState(1);
  const result = useMemo(() => computeExpensiveValue(num), [num]);

  return (
    <div className="p-4">
      <h1 className="text-xl">Memo Example (useMemo)</h1>
      <p>Используется для мемоизации значений, чтобы избежать их повторного вычисления при каждом рендере.</p>
      <h2>Number: {num}</h2>
      <h2>Computed Value: {result}</h2>
      <button onClick={() => setNum(num + 1)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Increase Number</button>
    </div>
  );
};

export default MemoExample;
