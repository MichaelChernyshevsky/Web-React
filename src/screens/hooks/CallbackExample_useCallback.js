import React, { useCallback, useState } from 'react';

const Button = ({ onClick, children }) => {
  console.log('Rendering button:', children);
  return <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">{children}</button>;
};

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl">Callback Example (useCallback)</h1>
      <p>Используется для мемоизации функций, чтобы избежать их пересоздания при каждом рендере.</p>
      <Button onClick={handleClick}>Click Me!</Button>
      <button onClick={() => setCount(count + 1)} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Increase Count</button>
    </div>
  );
};

export default CallbackExample;
