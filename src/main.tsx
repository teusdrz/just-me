import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Importa os nossos estilos globais para que sejam aplicados em toda a aplicação.
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
