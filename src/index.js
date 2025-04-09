import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterProvider from './components/contexts/counterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    {/* using useContext */}
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);

