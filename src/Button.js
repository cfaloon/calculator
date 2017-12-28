import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  handleClick = () => {
    this.props.handleReceiveClick(this.props.value);
  }

  render () {
    return (
      <button onClick={this.handleClick} className={this.props.className}>{this.props.value}</button>
    );
  }
}
