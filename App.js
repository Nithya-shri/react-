import React from 'react';
import logo from './logo.svg';
import './App.css';

export class MyComponent extends React.component{
  render()
  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello  world !
        </p>
        
      </header>
    </div>
  );
}
}



