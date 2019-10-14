/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Header from './core/Header';
import KeywordsInput from './search/KeywordsInput';
import Labels from './toggles/Labels';
import Languages from './toggles/Languages';
import LoadingSpinner from './statuses/LoadingSpinner';
import InitialGreeting from './statuses/InitialGreeting';
import SearchResultsContainer from './search/SearchResultsContainer';
import { formatLabelsForUrl, formatTextToSearch, joinItemsForUrl } from '../utils/formatting';
import { baseUrl, sortOptions } from '../utils/constants';
import '../styles/main.scss';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  state = {
    labels: {
      hacktoberfest: true,
      goodFirstIssue: false,
      helpWanted: false,
      documentation: false,
      bug: false,
      react: false,
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
    pageNum: 1,
    isButtonLocked: false,
  };

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

  getIssues = async (event, shouldResetPageNum = true) => {
    const { isButtonLocked } = this.state;
    event.preventDefault();
    if (isButtonLocked) return;

    const preFetchState = {
      isEmpty: true,
      isFetching: true,
      isButtonLocked: true,
    };
    if (shouldResetPageNum) {
      preFetchState.pageNum = 1;
    }
    this.setState(preFetchState);
    const finalUrl = this.createUrl();
    await fetch(finalUrl)
      .then(this.handleErrors)
      .then(resJson => {
        this.setState(
          {
            isEmpty: false,
            isFetching: false,
            results: resJson,
          },
          () =>
            setTimeout(() => {
              this.setState({ isButtonLocked: false });
            }, 3000)
        );
      })
      .catch(() => {
        this.setState({ fetchError: true, isFetching: false, isButtonLocked: false });
      });
  };

  handleTextChange = e => {
    this.setState({ textToSearch: e.target.value });
  };

  handlePageChange = (e, pageNum) => {
    e.preventDefault();
    e.persist();

    this.setState(
      {
        pageNum,
        isButtonLocked: false,
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

  onReset = () => {
    const resetLabels = this.resetToggles('labels');
    const resetLanguages = this.resetToggles('languages');
    this.setState({
      labels: { ...resetLabels },
      languages: { ...resetLanguages },
      fetchError: false,
      isEmpty: true,
      isLoading: false,
      results: {},
      textToSearch: '',
      pageNum: 1,
      isButtonLocked: false,
    });
  };

  render() {
    const {
      fetchError,
      isButtonLocked,
      isEmpty,
      isFetching,
      labels,
      languages,
      pageNum,
      results,
      textToSearch,
    } = this.state;

    return (
      <div className="app-wrapper">
        <Header />

        <Labels labels={labels} onToggleChange={this.onToggleChange} />
        <Languages languages={languages} onToggleChange={this.onToggleChange} />
        <KeywordsInput handleTextChange={this.handleTextChange} textToSearch={textToSearch} />

        <Button
          className="get-btn"
          color="primary"
          variant="contained"
          disabled={isFetching || isButtonLocked}
          onClick={this.getIssues}
          type="submit"
          size="large"
        >
          Load Issues
        </Button>

        <Button
          color="secondary"
          variant="contained"
          className="reset-btn"
          onClick={this.onReset}
          size="large"
        >
          Reset
        </Button>

        {isEmpty ? (
          isFetching ? (
            <LoadingSpinner />
          ) : (
            <InitialGreeting hasError={fetchError} />
          )
        ) : (
          <SearchResultsContainer
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
