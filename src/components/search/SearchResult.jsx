import './SearchResult.scss';

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
  numComments,
  labels,
  darkMode
}) => {
  const [hasBeenClicked, setClicked] = useState(false);

  const labelChips = labels.map(({ id, name, color }) => {
    return <Chip color={color} key={id} text={name} />;
  });

  return (
    <div className={`result-wrapper ${hasBeenClicked ? 'clicked' : ''}`}>
      <div className="result-header">
        <img alt="avatar" className="avatar" src={user.avatar_url} />

        <a
          className="link-title"
          href={htmlUrl}
          onClick={() => setClicked(true)}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}
        </a>
      </div>
      <div className="result-body">
        <p className="body-text">{bodyText}</p>

        <div className="metadata">
          <div>{`${userName}/${repoName}`}</div>
          <div className="issue-age">{issueAge}</div>
          <div className="comments">{`${numComments} comments`}</div>
        </div>

        <div className="label-chips">{labelChips}</div>
      </div>
    </div>
  );
};
