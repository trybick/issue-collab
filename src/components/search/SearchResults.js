import React from 'react';
import moment from 'moment';

const SearchResults = ({ results }) => {
  const searchResults =
    results.items[0] &&
    results.items.map(item => {
      const htmlUrl = item.html_url.split('/');
      const userName = htmlUrl[3];
      const repoName = htmlUrl[4];
      const issueAge = moment(item.created_at).fromNow();

      let bodyText;
      if (item.body) {
        if (item.body.length === 0) {
          bodyText = '(no text)';
        } else if (item.body.length < 300) {
          bodyText = item.body;
        } else if (item.body.length > 300) {
          bodyText = item.body.substr(0, 300) + '...';
        }
      }

      const mappedLabels = item.labels.map(label => {
        const labelColor = '#' + label.color;
        return (
          <span key={label.id} style={{ color: labelColor }}>
            {label.name}
          </span>
        );
      });

      return (
        <div className='result' key={item.id}>
          <img src={item.user.avatar_url} width='50px' alt='avatar' />

          <a href={item.html_url} target='_blank' rel='noopener noreferrer'>
            {item.title}
          </a>

          <p>{bodyText}</p>

          <div>{userName + '/' + repoName}</div>
          <div>{issueAge}</div>

          <p>{mappedLabels}</p>

          <br />
          <br />
        </div>
      );
    });

  return (
    <div className='results'>
      <h4>Total results: {results.total_count.toLocaleString()}</h4>
      {searchResults}
    </div>
  )
};

export default SearchResults;
