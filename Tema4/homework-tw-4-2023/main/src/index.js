import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import RobotForm from './components/RobotForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizează componentele App și RobotForm în root
root.render(
  <React.StrictMode>
    <App />
    <RobotForm />
  </React.StrictMode>
);


