import '../../styles/Result.scss';

import React, { useState } from 'react';
import Chip from '../core/Chip';

export const SearchResult = ({
  user,
  htmlUrl,
  title,
  bodyText,
  userName,
  repoName,
  issueAge,
  labels,
}) => {
  const [hasBeenClicked, setClicked] = useState(false);

  const labelChips = labels.map(({ id, name, color }) => {
    return <Chip key={id} text={name} color={color} />;
  });

  return (
    <div className={`result ${hasBeenClicked ? 'clicked' : ''}`}>
      <div className="result-header">
        <img className="avatar" src={user.avatar_url} alt="avatar" />

        <a
          href={htmlUrl}
          onClick={() => setClicked(true)}
          className="link-title"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
      <div className="result-content">
        <p className="body-text">{bodyText}</p>

        <div className="metadata">
          <div>{`${userName}/${repoName}`}</div>
          <div className="issue-age">{issueAge}</div>
        </div>

        <div className="label-chips">{labelChips}</div>
      </div>
    </div>
  );
};
