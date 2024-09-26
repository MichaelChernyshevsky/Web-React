import React, { useReducer } from 'react';

const initialState = { count: 0,count_1: 10 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 ,count_1: state.count_1 + 10};
    case 'decrement':
      return { count: state.count - 1 ,count_1: state.count_1 - 10};
    default:
      throw new Error();
  }
}

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-4">
      <h1 className="text-xl">Reducer Example (useReducer)</h1>
      <p>Используется для управления сложным состоянием в функциональных компонентах.</p>
      <h2>Current Count: {state.count}  Current Count_1: {state.count_1} </h2>
      <button onClick={() => dispatch({ type: 'increment' })} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })} className="bg-red-500 text-white px-4 py-2 rounded">Decrease</button>
    </div>
  );
};

export default ReducerExample;
