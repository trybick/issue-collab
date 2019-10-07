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

  const totalPage = Math.ceil(results.total_count / resultPerPage);

  return (
    <div className="results">
      {results.total_count > 0 && (
        <div className="pagination">
          <h4 className="pagination-count">Total results: {results.total_count.toLocaleString()}</h4>
          <span className="pagination-pages">
            Page {currentPage} of {totalPage}
          </span>
        </div>
      )}
      {formattedResults}
      {results.total_count === 0 && <NoResultsMessage />}
      {totalPage > 1 && (
        <Pagination currentPage={currentPage} onPageChange={onPageChange} totalPage={totalPage} />
      )}
    </div>
  );
};

export default SearchResults;
