import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display.js';

class App extends Component {
  render() {
    let displayVal = 0;
    let buttonArray = [];
    for(let x=0; x <= 9; x++) {
      buttonArray.push(<button>{x}</button>);
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculator</h1>
        </header>
        <Display inputValue={displayVal} />
        <div className="buttons">
          { buttonArray }
        </div>
      </div>
    );
  }
}

export default App;
