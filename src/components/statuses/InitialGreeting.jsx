import React from 'react';

const InitialGreeting = ({ hasError }) => {
  const statusMessage = hasError ? (
    <p>Oops, that was an error.</p>
  ) : (
    <p>
      Enable some filters and click <span className="get-issues-text">Load Issues!</span>
    </p>
  );

  return <div className="initial-greeting">{statusMessage}</div>;
};

export default InitialGreeting;
