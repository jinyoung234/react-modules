import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './lib/styles/reset.css';
import './lib/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
