import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FiligraneWaves from './components/FiligraneWaves';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app-container">
      <App />
      <div className="background-container">
        <FiligraneWaves />
      </div>
    </div>
  </React.StrictMode>
);