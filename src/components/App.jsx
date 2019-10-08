/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './core/Button';
import Header from './core/Header';
import KeywordsInput from './search/KeywordsInput';
import Labels from './toggles/Labels';
import Languages from './toggles/Languages';
import LoadingSpinner from './statuses/LoadingSpinner';
import InitialGreeting from './statuses/InitialGreeting';
import SearchResults from './search/SearchResults';
import { formatLabelsForUrl, formatTextToSearch, joinItemsForUrl } from '../utils/formatting';
import { baseUrl, sortOptions } from '../utils/constants';
import '../styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: {
        goodFirstIssue: false,
        helpWanted: false,
        easy: false,
        documentation: false,
        bug: false,
        hacktoberfest: true,
      },
      languages: {
        python: false,
        javascript: false,
        php: false,
        java: false,
        ruby: false,
        swift: false,
      },
      fetchError: false,
      isEmpty: true,
      isFetching: false,
      results: {},
      textToSearch: '',
      url: '',
      pageNum: 1,
    };
  }

  getActiveItems = type => {
    const items = this.state[type];
    return Object.keys(items).filter(item => items[item]);
  };

  createUrl = () => {
    const { textToSearch, pageNum } = this.state;
    const formattedText = formatTextToSearch(textToSearch);

    const activeLabels = this.getActiveItems('labels');
    const formattedLabels = formatLabelsForUrl(activeLabels);
    const joinedLabels = joinItemsForUrl(formattedLabels, 'labels');

    const activeLanguage = this.getActiveItems('languages');
    const joinedLanguage = joinItemsForUrl(activeLanguage, 'languages');

    return `${baseUrl}${formattedText}type:issue${joinedLabels}${joinedLanguage}${sortOptions}&page=${pageNum}`;
  };

  handleErrors = res => {
    if (!res.ok) {
      this.setState({ fetchError: true, isFetching: false });
      throw Error(res.status);
    }
    return res.json();
  };

  getIssues = (event, shouldResetPageNum = true) => {
    event.preventDefault();
    const newState = {
      isEmpty: true,
      isFetching: true,
    };
    if (shouldResetPageNum) {
      newState.pageNum = 1;
    }
    this.setState(newState, async () => {
      const finalUrl = this.createUrl();
      await fetch(finalUrl)
        .then(this.handleErrors)
        .then(resJson => {
          this.setState({
            isEmpty: false,
            isFetching: false,
            results: resJson,
            url: finalUrl,
          });
        })
        .catch(err => {
          this.setState({ fetchError: true, isFetching: false });
        });
    });
  };

  handleTextChange = event => {
    this.setState({ textToSearch: event.target.value });
  };

  handlePageChange = (e, pageNum) => {
    e.preventDefault();
    e.persist();

    this.setState(
      {
        pageNum,
      },
      () => {
        this.getIssues(e, false);
      }
    );
  };

  toggleLanguage = selectedName => {
    const currentLanguages = this.state.languages;
    Object.keys(currentLanguages).forEach(key => {
      if (key === selectedName) {
        currentLanguages[key] = !currentLanguages[key];
      } else {
        currentLanguages[key] = false;
      }
    });
    return currentLanguages;
  };

  onToggleChange = event => {
    const { labels } = this.state;
    const selectedType = event.target.dataset.type;
    const selectedName = event.target.name;

    if (selectedType === 'label') {
      this.setState({
        labels: { ...labels, [selectedName]: !labels[selectedName] },
      });
    } else if (selectedType === 'language') {
      const updatedLanguages = this.toggleLanguage(selectedName);
      this.setState({
        languages: { ...updatedLanguages },
      });
    }
  };

  resetToggles = toggleType => {
    const currentItems = this.state[toggleType];
    Object.keys(currentItems).forEach(key => {
      currentItems[key] = false;
    });
    return currentItems;
  };

  onResetToggles = () => {
    const resetLabels = this.resetToggles('labels');
    const resetLanguages = this.resetToggles('languages');
    this.setState({
      labels: { ...resetLabels },
      languages: { ...resetLanguages },
    });
  };

  render() {
    const {
      fetchError,
      isEmpty,
      isFetching,
      labels,
      languages,
      pageNum,
      results,
      textToSearch,
    } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <Labels labels={labels} onToggleChange={this.onToggleChange} />
        <Languages languages={languages} onToggleChange={this.onToggleChange} />
        <KeywordsInput handleTextChange={this.handleTextChange} textToSearch={textToSearch} />

        {/* Reset button */}
        <Button
          className="reset-btn"
          classNameWrapper="reset-btn-wrapper"
          onClick={this.onResetToggles}
          type="button"
        >
          Clear filters
        </Button>

        {/* Get button */}
        <Button
          className="get-issues-btn"
          classNameWrapper="get-button-wrapper"
          forForm="issues-form"
          onClick={this.getIssues}
          type="submit"
        >
          Load Issues
        </Button>

        {isEmpty ? (
          isFetching ? (
            <LoadingSpinner />
          ) : (
            <InitialGreeting hasError={fetchError} />
          )
        ) : (
          <SearchResults
            results={results}
            onPageChange={this.handlePageChange}
            currentPage={pageNum}
          />
        )}
      </div>
    );
  }
}

export default App;
