import React, { useLayoutEffect, useRef } from 'react';

const LayoutEffectExample = () => {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    divRef.current.style.border = '2px solid red';
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl">Layout Effect Example (useLayoutEffect)</h1>
      <p>Используется для выполнения побочных эффектов, которые должны происходить до рендера.</p>
      <div ref={divRef} className="p-2">This div has a red border!</div>
    </div>
  );
};

export default LayoutEffectExample;
