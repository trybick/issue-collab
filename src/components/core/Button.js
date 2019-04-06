import React from 'react';

const Button = ({ text, name, onClick }) => (
  <button
    name={name}
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

// NEXT: add this - 
// <button onClick={this.handleClick}>
//   {this.state.isToggleOn ? 'ON' : 'OFF'}
// </button>

export default Button;