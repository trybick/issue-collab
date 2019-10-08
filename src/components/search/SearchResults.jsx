import React from 'react';
import moment from 'moment';
import Pagination from '../core/Pagination';
import NoResultsMessage from '../statuses/NoResultsMessage';
import { resultPerPage } from '../../utils/constants';
import { SearchResult } from './SearchResult';

const SearchResults = ({ currentPage, onPageChange, results }) => {
  const formattedResults =
    results.items[0] &&
    results.items.map(item => {
      const htmlUrl = item.html_url.split('/');
      const userName = htmlUrl[3];
      const repoName = htmlUrl[4];
      const issueAge = moment(item.created_at).fromNow();

      let bodyText = <span style={{ fontStyle: 'italic' }}>No additional text</span>;
      if (item.body) {
        if (item.body.length < 300) {
          bodyText = item.body;
        } else if (item.body.length > 300) {
          bodyText = `${item.body.substr(0, 300)}...`;
        }
      }

      // This conditional removes an issue someone created in the future (which always shows on top): https://github.com/sebsheep/aws-server/issues/2
      // After Dec 21, 2019 we may be able to remove this conditional
      return item.id === 459097288 ? null : (
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

  const resultCount = results.total_count > 0 && (
    <h4 className="results-count">
      Issues Found:
      <span className="highlight">{results.total_count.toLocaleString()}</span>
    </h4>
  );

  const totalPage = Math.ceil(results.total_count / resultPerPage);

  return (
    <div className="results">
      {resultCount}
      {formattedResults}
      {results.total_count === 0 && <NoResultsMessage />}
      {totalPage > 1 && (
        <Pagination currentPage={currentPage} onPageChange={onPageChange} totalPage={totalPage} />
      )}
    </div>
  );
};

export default SearchResults;
