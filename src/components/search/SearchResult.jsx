import '../../styles/Result.scss';

import React from 'react';
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
  const mappedLabels = labels.map(({ id, name, color }) => {
    return <Chip key={id} text={name} color={color} />;
  });

  return (
    <div className="result">
      <div className="header">
        <img src={user.avatar_url} alt="avatar" />

        <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
      <div className="content">
        <p>{bodyText}</p>

        <div className="metadata">
          <div>{`${userName}/${repoName}`}</div>
          <div className="issue-age">{issueAge}</div>
        </div>

        <p>{mappedLabels}</p>
      </div>
    </div>
  );
};
