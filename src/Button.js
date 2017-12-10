import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  handleClick = () => {
    switch (this.props.className) {
      case 'Button-numeral':
        let display = document.getElementById("display");
        display.value = display.value * 10 + this.props.value;
        break;
      default:
        console.log('other');
    }
  }

  render () {
    return (
      <button onClick={this.handleClick} className={this.props.className}>{this.props.value}</button>
    );
  }
}
