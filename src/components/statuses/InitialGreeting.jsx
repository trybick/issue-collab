import React from 'react';
import logo from '../../images/ic.png';

const InitialGreeting = ({ hasError }) => {
  const statusMessage = hasError ? (
    <p>Oops, that was an error.</p>
  ) : (
    <div className="greeting-card">
      <img src={logo} alt="issue-collab-logo" className="greeting-img" />
      <span>
        <p>
          Use the toggles above to filter by common <em>issue labels</em> and by your favorite{' '}
          <em>programming languages</em>. You can also search by <em>keyword</em>!
        </p>
        <p>
          Click <em>Load Issues</em> and get collaborating!
        </p>
      </span>
    </div>
  );

  return <div className="initial-greeting">{statusMessage}</div>;
};

export default InitialGreeting;
