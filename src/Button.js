import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  handleClick = () => {
    switch (this.props.className) {
      case 'Button-numeral':
        const updatedValue = this.props.displayValue * 10 + this.props.value;
        this.props.handleReceiveInput(updatedValue);
        break;
      case 'Button-clear':
        const zeroValue = 0;
        this.props.handleReceiveInput(zeroValue);
        break;
      default:
        this.props.handleReceiveOperator(this.props.value);
    }
  }

  render () {
    return (
      <button onClick={this.handleClick} className={this.props.className}>{this.props.value}</button>
    );
  }
}
