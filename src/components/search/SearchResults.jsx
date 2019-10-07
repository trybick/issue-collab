import React from 'react';
import moment from 'moment';
import NoResultsMessage from '../statuses/NoResultsMessage';
import Chip from '../core/Chip';
import '../../styles/Results.scss';

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

      const mappedLabels = item.labels.map(({ id, name, color }) => {
        return <Chip key={id} text={name} color={color}/>;
      });

      return (
        <div className="result" key={item.id}>
          <div className="header">
            <img src={item.user.avatar_url} alt="avatar" />

            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </div>
          <div className="content">
            <p>{bodyText}</p>

            <div className="repo-name">{`${userName}/${repoName}`}</div>
            <div className="issue-age">{issueAge}</div>

            <p>{mappedLabels}</p>
          </div>
        </div>
      );
    });

  const resultCount = 
    results.total_count > 0  && (
      <h4 className="results-count">Total results:
        <span className="highlight">{results.total_count.toLocaleString()}</span>
      </h4>
    );

  return (
    <div className="results">
      {resultCount}
      {formattedResults}
      {results.total_count === 0 && <NoResultsMessage />}
    </div>
  );
};

export default SearchResults;
