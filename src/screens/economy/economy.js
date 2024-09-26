import React, { useReducer } from 'react';
import StatisticWidget from './statistic';

// Определяем типы действий для useReducer
const ACTIONS = {
  ADD_ENTRY: 'add-entry',
  DELETE_ENTRY: 'delete-entry',
  SET_AMOUNT: 'set-amount',
  SET_TYPE: 'set-type',
};

export const EntryType = {
  INCOME: 'income',
  SPENDING: 'spending',
  All: 'all',
};


// Определяем редьюсер для управления состоянием
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ENTRY:
      if (!state.amount) return state;
      const newEntry = {
        id: Date.now(),
        amount: parseFloat(state.amount),
        type: state.type,
      };
      return {
        ...state,
        entries: [...state.entries, newEntry],
        amount: '',
      };
    case ACTIONS.DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== action.payload),
      };
    case ACTIONS.SET_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case ACTIONS.SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

const Economy = () => {
  const [state, dispatch] = useReducer(reducer, {
    entries: [],
    amount: '',
    type: 'income',
  });

  const { entries, amount, type } = state;

  // Подсчет общей суммы доходов (income)
  const totalIncome = entries
    .filter(entry => entry.type === EntryType.INCOME)
    .reduce((acc, entry) => acc + entry.amount, 0);

  // Подсчет общей суммы расходов (spending)
  const totalSpending = entries
    .filter(entry => entry.type === EntryType.SPENDING)
    .reduce((acc, entry) => acc + entry.amount, 0);

  // Общий баланс (income - spending)
  const totalBalance = totalIncome - totalSpending;

  return (
    <div>
      <div className='px-9'>
        <StatisticWidget label="Total Income" value={totalIncome} type={EntryType.INCOME} />
        <StatisticWidget label="Total Spending" value={totalSpending} type={EntryType.SPENDING} />
        <StatisticWidget label="Total Balance" value={totalBalance} type={EntryType.All} />
      </div>
      <div className='px-60 pt-4'>
        <input
          className='m-10 text-black'
          type="number"
          value={amount}
          onChange={(e) => dispatch({ type: ACTIONS.SET_AMOUNT, payload: e.target.value })}
          placeholder="Enter amount"
        />
        <select
          className='m-10 text-black'
          value={type}
          onChange={(e) => dispatch({ type: ACTIONS.SET_TYPE, payload: e.target.value })}
        >
          <option value="income">Income</option>
          <option value="spending">Spending</option>
        </select>
        <button
          className='px-6 py-2 text-green-400 bg-zinc-800 rounded-lg shadow-lg hover:bg-slate-700 transition duration-300'
          onClick={() => dispatch({ type: ACTIONS.ADD_ENTRY })}
        >
          Add Entry
        </button>
        <h2 className='text-3xl text-yellow-600'>Entries:</h2>
        <ul>
          {[...entries].reverse().map(entry => (
            <li key={entry.id} className='text-white text-4xl flex justify-between items-center'>
              <span>
                {entry.type === 'income' ? '+' : '-'}{entry.amount}
              </span>
              <button
                className='ml-auto mr-4 text-white px-4 py-1 bg-red-600 rounded-lg text-base'
                onClick={() => dispatch({ type: ACTIONS.DELETE_ENTRY, payload: entry.id })}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Economy;
