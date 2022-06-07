import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UseFetch } from './useFetch';
import { AppProvider } from './Context';
import { Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App/>
      </Router>
    </AppProvider>
    
  </React.StrictMode>
);


