// @flow
import React from 'react';
import './App.css';
import Articles from './components/articles/Articles';

export const App = () => (
  <div className="App">
    <header className="App-header">
      <p> I Learnt Today </p>
      <Articles />
    </header>
  </div>
);

export default App;
