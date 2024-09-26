import React, { useRef } from 'react';

const RefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl">Ref Example (useRef)</h1>
      <p>Используется для получения доступа к DOM-элементам или для хранения значений, которые не требуют повторного рендера при обновлении.</p>
      <input ref={inputRef} type="text" className="border p-2" />
      <button onClick={focusInput} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Focus Input</button>
    </div>
  );
};

export default RefExample;
