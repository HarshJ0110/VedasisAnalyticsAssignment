import React from 'react';
import ReactDOM from 'react-dom/client';
import DashStates from './states.js/DashStates';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DashStates><App /></DashStates>
  </React.StrictMode>
);

