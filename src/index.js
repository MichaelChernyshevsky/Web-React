import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="bg-fixed bg-cover bg-gray-900 h-screen">
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
  
);


