import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display.js';
import Button from './Button.js';

class App extends Component {

state = {
  displayValue: 0,
  operand: null
}

handleRecieveInput = (x) => {
  this.setState({displayValue: x})
  console.log(x);
}

handleRecieveOperand = (x) => {
  if (x === "=") {
    console.log("run the calc")
  }
  else {
    this.setState({operand: x})
  }
}
  render() {
    // let displayVal = 0;
    let buttonArray = [];
    for(let x=0; x <= 9; x++) {
      buttonArray.push(<Button key={x} value={x} displayValue={this.state.displayValue} handleRecieveInput={this.handleRecieveInput} className="Button-numeral" />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculator</h1>
        </header>
        <div className="Interface">
          <Display inputValue={this.state.displayValue} />
          <div className="button-row">
            { buttonArray[7] }{ buttonArray[8] }{ buttonArray[9] }<Button value="*" className="Button-operator"/>
          </div>
          <div className="button-row">
            { buttonArray[4] }{ buttonArray[5] }{ buttonArray[6] }<Button value="/" className="Button-operator"/>
          </div>
          <div className="button-row">
            { buttonArray[1] }{ buttonArray[2] }{ buttonArray[3] }<Button value="+" className="Button-operator"/>
          </div>
          <div className="button-row">
            <Button value="C" className="Button-clear"/>{ buttonArray[0] }<Button value="=" className="Button-clear"/><Button value="-" className="Button-operator"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
