import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <PulseLoader color="black" />
    </div>
  );
};

export default LoadingSpinner;
