import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl">Fetch Data (useEffect)</h1>
      <p>Используется для выполнения побочных эффектов в функциональных компонентах.</p>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
