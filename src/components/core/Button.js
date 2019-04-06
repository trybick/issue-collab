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

export default Button;