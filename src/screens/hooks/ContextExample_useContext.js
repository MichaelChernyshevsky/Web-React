import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button
      className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
    >
      Themed Button
    </button>
  );
};

const ContextExample = () => {
  const [theme, setTheme] = useState('light'); // Начальная тема - светлая

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Переключение темы
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="p-4">
        <h1 className="text-xl">Context Example (useContext)</h1>
        <p>Используется для получения значения из контекста.</p>
        <ThemedButton />
        <button onClick={toggleTheme} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
};

export default ContextExample;
