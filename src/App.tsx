import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          data-testid="learn-link"
          className="App-link"
          href="http://github.com/cjfff"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn testing
        </a>
      </header>
    </div>
  );
}

export default App;
