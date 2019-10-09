import React from 'react';

const InitialGreeting = ({ hasError }) => {
  const statusMessage = hasError ? (
    <p>Oops, that was an error.</p>
  ) : (
    <div className="greeting-description">
    <p>
        Find open source projects on <a href="https://github.com/">GitHub</a> by searching with labels, languages, or search terms!
      </p>
      <p>
        Use the toggles above to filter by common issue labels and by your favorite programming
        languages. You can also search by keyword!
      </p>
      <p><em>Click Load Issues and get collaborating!</em></p>
    </div>
  );

  return <div className="initial-greeting">{statusMessage}</div>;
};

export default InitialGreeting;
