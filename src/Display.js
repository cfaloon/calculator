import React, { Component } from 'react';
import './Display.css';

export default class Display extends Component {
  render () {
    return (
      <input id="display" className="display" value={this.props.inputValue} readOnly/>
    )
  }
}
