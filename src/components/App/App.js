// @flow
import React from 'react';
import './App.css';
import Articles from '../Articles/Articles';

export const App = () => (
  <div className="app">
    <header className="app-header">
      <p>I Learnt Today</p>
      <Articles />
    </header>
  </div>
);

export default App;
