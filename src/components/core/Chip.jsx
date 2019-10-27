import React from 'react';
import './Chip.scss';
import { getContrastTextColor } from '../../utils/color';

const Chip = ({ text, color }) => {
  const dinStyle = {
    backgroundColor: `#${color}`,
    color: getContrastTextColor(color),
  };

  return (
    <span className="chip" style={dinStyle}>
      {text}
    </span>
  );
};

export default Chip;
