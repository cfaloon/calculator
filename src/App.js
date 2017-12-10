import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display.js';
import Button from './Button.js';

class App extends Component {
  render() {
    let displayVal = 0;
    let buttonArray = [];
    for(let x=0; x <= 9; x++) {
      buttonArray.push(<Button key={x} value={x} className="Button-numeral" />);
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
          <Button value="+" className="Button-operator"/>
          <Button value="-" className="Button-operator"/>
          <Button value="*" className="Button-operator"/>
          <Button value="/" className="Button-operator"/>
          <Button value="=" className="Button-operator"/>
          <Button value="C" className="Button-clear"/>

        </div>
      </div>
    );
  }
}

export default App;
