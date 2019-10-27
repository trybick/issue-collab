import React from 'react';
import moment from 'moment';
import Pagination from '../core/Pagination';
import NoResultsMessage from '../statuses/NoResultsMessage';
import { resultPerPage } from '../../utils/constants';
import { SearchResult } from './SearchResult';
import './SearchResultsContainer.scss';

const SearchResultsContainer = ({ currentPage, onPageChange, results }) => {
  const totalPages = Math.ceil(results.total_count / resultPerPage);

  const resultsContainerHeader = results.total_count > 0 && (
    <div className="results-container-header">
      <h4 className="issues-count">
        Issues Found:
        <span className="issues-count-number">{results.total_count.toLocaleString()}</span>
      </h4>
    </div>
  );

  const formattedResults =
    results.items[0] &&
    results.items.map(item => {
      const htmlUrl = item.html_url.split('/');
      const userName = htmlUrl[3];
      const repoName = htmlUrl[4];
      const issueAge = moment(item.created_at).fromNow();

      let bodyText = <span className="no-text-message">No additional text</span>;
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

  return (
    <div className="results-container">
      {resultsContainerHeader}
      {formattedResults}
      {results.total_count === 0 && <NoResultsMessage />}
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} onPageChange={onPageChange} totalPages={totalPages} />
      )}
    </div>
  );
};

export default SearchResultsContainer;
