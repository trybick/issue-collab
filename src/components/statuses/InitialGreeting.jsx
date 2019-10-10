import React from 'react';

const InitialGreeting = ({ hasError }) => {
  const statusMessage = hasError ? (
    <p>Oops, that was an error.</p>
  ) : (
    <div className="greeting__card">
      {/* eslint-disable global-require */}
      <img src={require('../../images/ic.png')} alt="issues-collab" className="greeting__img" />
      {/* eslint-enable global-require */}
      <span>
        <p>
          Use the toggles above to filter by common <em>issue labels</em> and by your favorite{' '}
          <em>programming languages</em>. You can also search by <em>keyword</em>!
        </p>
        <p>Click Load Issues and get collaborating!</p>
      </span>
    </div>
  );

  return <div className="initial-greeting">{statusMessage}</div>;
};

export default InitialGreeting;
