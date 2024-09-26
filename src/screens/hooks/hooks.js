import React from 'react';
import Counter from './Counter_useState';
import FetchData from './FetchData_useEffect';
import ContextExample from './ContextExample_useContext';
import ReducerExample from './ReducerExample_useReducer';
import RefExample from './RefExample_useRef';
import MemoExample from './MemoExample_useMemo';
import CallbackExample from './CallbackExample_useCallback';
import LayoutEffectExample from './LayoutEffectExample_useLayoutEffect';
import ImperativeHandleExample from './ImperativeHandleExample_useImperativeHandle';

const Hooks = () => {
  return (
    <div className="p-4">
      <Counter />
      <hr className="border-t-2 border-gray-300 my-4" />
      <FetchData />
      <hr className="border-t-2 border-gray-300 my-4" />
      <ContextExample />
      <hr className="border-t-2 border-gray-300 my-4" />
      <ReducerExample />
      <hr className="border-t-2 border-gray-300 my-4" />
      <RefExample />
      <hr className="border-t-2 border-gray-300 my-4" />
      <MemoExample />

      <hr className="border-t-2 border-gray-300 my-4" />
      <CallbackExample />
      <hr className="border-t-2 border-gray-300 my-4" />
      <LayoutEffectExample />
      <hr className="border-t-2 border-gray-300 my-4" />
      <ImperativeHandleExample />
      <hr className="border-t-2 border-gray-300 my-4" />
    </div>
  );
};

export default Hooks;
