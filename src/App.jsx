import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import './assets/styles/App.css';

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
