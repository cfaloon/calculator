import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display.js';
import Button from './Button.js';

class App extends Component {

state = {
  displayValue: 0,
  operator: null,
  firstNum: null
}

handleReceiveClick = (value) => {
  switch(value) {
    case 'C':
      this.setState({displayValue: 0});
      break;
    case '+':
    case '-':
    case '/':
    case '*':
    case '=':
      this.handleReceiveOperator(value);
      break;
    default:
      let newValue = Number(value) + (this.state.displayValue * 10);
      this.setState({displayValue: newValue});
  }
}

handleReceiveOperator = (x) => {
  if (x === "=") {
    let returnVal = null;
    switch (this.state.operator) {
      case "+":
        returnVal = this.state.firstNum + this.state.displayValue;
        break;
      case "-":
        returnVal = this.state.firstNum - this.state.displayValue;
        break;
      case "/":
        returnVal = this.state.firstNum / this.state.displayValue;
        break;
      case "*":
        returnVal = this.state.firstNum * this.state.displayValue;
        break;
      default:

    }
    this.setState({displayValue: returnVal});
  }
  else {
    this.setState({
      operator: x,
      firstNum: this.state.displayValue,
      displayValue: 0
    });
  }
}
  render() {
    // let displayVal = 0;
    let buttonArray = [];
    for(let x=0; x <= 9; x++) {
      buttonArray.push(<Button key={x} value={x} displayValue={this.state.displayValue} handleReceiveClick={this.handleReceiveClick} className="Button-numeral" />);
    }

    const operatorButtonProps = { className: "Button-operator", handleReceiveClick: this.handleReceiveClick };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculator</h1>
        </header>
        <div className="Interface">
          <Display inputValue={this.state.displayValue} />
          <div className="button-row">
            { buttonArray[7] }{ buttonArray[8] }{ buttonArray[9] }<Button {...operatorButtonProps} value="*"/>
          </div>
          <div className="button-row">
            { buttonArray[4] }{ buttonArray[5] }{ buttonArray[6] }<Button {...operatorButtonProps} value="/"/>
          </div>
          <div className="button-row">
            { buttonArray[1] }{ buttonArray[2] }{ buttonArray[3] }<Button {...operatorButtonProps} value="+"/>
          </div>
          <div className="button-row">
            <Button value="C" handleReceiveClick={this.handleReceiveClick} className="Button-clear"/>{ buttonArray[0] }<Button {...operatorButtonProps} value="="/><Button {...operatorButtonProps} value="-"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
