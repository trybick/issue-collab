import React from 'react';

const Button = ({ text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;