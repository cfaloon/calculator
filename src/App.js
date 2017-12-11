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
        <div className="Interface col-md-offset-3 col-md-5">
          <div className="row">
            <div className="col-md-4">
              <Display inputValue={displayVal} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="buttons">
                { buttonArray[7] }{ buttonArray[8] }{ buttonArray[9] }<Button value="*" className="Button-operator"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="buttons">
                { buttonArray[4] }{ buttonArray[5] }{ buttonArray[6] }<Button value="/" className="Button-operator"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="buttons">
                { buttonArray[1] }{ buttonArray[2] }{ buttonArray[3] }<Button value="+" className="Button-operator"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="buttons">
                <Button value="C" className="Button-clear"/>{ buttonArray[0] }<Button value="=" className="Button-clear"/><Button value="/" className="Button-operator"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
