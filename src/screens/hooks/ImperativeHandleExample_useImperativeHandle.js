import React, { useImperativeHandle, useRef, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type="text" className="border p-2" />;
});

const ImperativeHandleExample = () => {
  const inputRef = useRef();

  return (
    <div className="p-4">
      <h1 className="text-xl">Imperative Handle Example (useImperativeHandle)</h1>
      <p>Используется для настройки экземпляров компонентов и для предоставления 
      функциональности внешним компонентам.</p>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Focus Input</button>
    </div>
  );
};

export default ImperativeHandleExample;
