import './../../styles/Result.scss';

import React from 'react';

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
  const mappedLabels = labels.map(label => {
    return (
      <span key={label.id} style={{ color: `#${label.color}` }} className="result-label">
        {label.name}
      </span>
    );
  });

  return (
    <div className="result">
      <img src={user.avatar_url} width="50px" alt="avatar" class="result-avatar" />
      <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
        {title}
      </a>

      <p>{bodyText}</p>

      <div>{`${userName}/${repoName}`}</div>
      <div>{issueAge}</div>

      <p>{mappedLabels}</p>
    </div>
  );
};
