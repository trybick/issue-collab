import React from 'react';

const InitialGreeting = ({ hasError }) => {
  const statusMessage = hasError ? (
    <p>Oops, that was an error.</p>
  ) : (
    <div>

      <p>
        Use the toggles above to filter by common issue labels and by your favorite programming
        languages. You can also search by keyword!
      </p>
      <p>Click Load Issues and get collaborating!</p>
    </div>
  );

  return <div className="initial-greeting">{statusMessage}</div>;
};

export default InitialGreeting;
