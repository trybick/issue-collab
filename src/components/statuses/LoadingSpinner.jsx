import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import './LoadingSpinner.scss';

const LoadingSpinner = ({ darkMode }) => {
  return (
    <div className="loading-spinner-wrapper">
      <PulseLoader color={darkMode ? 'white' : 'black'} />
    </div>
  );
};

export default LoadingSpinner;
