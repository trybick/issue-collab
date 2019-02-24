import React from 'react';
import moment from 'moment';

const SearchResults = props => {
  const { results } = props;

  const searchResults =
    results.items[0] &&
    results.items.map(item => {
      const htmlUrl = item.html_url.split('/');
      const userName = htmlUrl[3];
      const repoName = htmlUrl[4];

      return (
        <div className='result' key={item.id}>
          {/* Hyperlinked title */}
          <a href={item.html_url} target='_blank' rel='noopener noreferrer'>
            {item.title}
          </a>

          {/* First 300 characters of body */}
          <p>
            {item.body.length === 0 ? '(no text)' : item.body.substr(0, 300)}
            {item.body.length > 300 ? '...' : null}
          </p>

          <div>{userName + '/' + repoName}</div>
          <div>{moment(item.created_at).fromNow()}</div>

          {/* Some issues have an array of labels */}
          <p>
            {item.labels.map(label => {
              const labelColor = '#' + label.color;
              return (
                <span key={label.id} style={{ color: labelColor }}>
                  {label.name}
                </span>
              );
            })}
          </p>

          <br />
          <br />
        </div>
      );
    });

  return <div className='results'>{searchResults}</div>;
};

export default SearchResults;
