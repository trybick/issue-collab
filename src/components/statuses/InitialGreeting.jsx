import React from 'react';

const InitialGreeting = ({ hasError }) => {
  const statusMessage = hasError ? (
    <p>Oops, that was an error.</p>
  ) : (
    <h4>Search open source issues on GitHub</h4>
  );

  return <div className="initial-greeting">{statusMessage}</div>;
};

export default InitialGreeting;
