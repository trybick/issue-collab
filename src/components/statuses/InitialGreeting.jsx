import React from 'react';
import logo from '../../images/greeting-icon.png';
import './InitialGreeting.scss';

const InitialGreeting = ({ hasError }) => {
  const statusMessage = hasError ? (
    <p>Oops, that was an error.</p>
  ) : (
    <div className="greeting-card">
      <span>
        <p>
          Use the toggles above to filter by common <em>issue labels</em> and by your favorite{' '}
          <em>programming languages</em>. You can also search by <em>keyword</em>!
        </p>
        <p>
          Click <em>Find Issues</em> and get collaborating!
        </p>
      </span>
      <img alt="issue-collab-logo" className="greeting-img" src={logo} />
    </div>
  );

  return <div className="greeting-card-wrapper">{statusMessage}</div>;
};

export default InitialGreeting;
