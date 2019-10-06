import moment from 'moment';
import React from 'react';

import NoResultsMessage from '../statuses/NoResultsMessage';
import { SearchResult } from './SearchResult';

const SearchResults = ({ results }) => {
  const formattedResults =
    results.items[0] &&
    results.items.map(item => {
      const htmlUrl = item.html_url.split('/');
      const userName = htmlUrl[3];
      const repoName = htmlUrl[4];
      const issueAge = moment(item.created_at).fromNow();

      let bodyText;
      if (item.body) {
        if (item.body.length === 0) {
          bodyText = '(no text provided)';
        } else if (item.body.length < 300) {
          bodyText = item.body;
        } else if (item.body.length > 300) {
          bodyText = `${item.body.substr(0, 300)}...`;
        }
      }

      return (
        <SearchResult
          key={item.id}
          user={item.user}
          htmlUrl={item.html_url}
          title={item.title}
          bodyText={bodyText}
          userName={userName}
          repoName={repoName}
          issueAge={issueAge}
          labels={item.labels}
        />
      );
    });

  return (
    <div className="results">
      {results.total_count > 0 && (
        <h4 className="results-count">Total results: {results.total_count.toLocaleString()}</h4>
      )}
      {formattedResults}
      {results.total_count === 0 && <NoResultsMessage />}
    </div>
  );
};

export default SearchResults;
