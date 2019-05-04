/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Title from './core/Title';
import SearchResults from './search/SearchResults';
import '../styles/main.scss';
import '../styles/react-toggle.scss';
import SearchBar from './search/SearchBar';
import Labels from './toggles/Labels';
import Languages from './toggles/Languages';
import { formatLabelsForUrl, formatTextToSearch } from '../utils/formatting';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: {
        goodFirstIssue: false,
        documentation: false,
        easy: false,
        helpWanted: false,
        bug: false,
        question: false,
        enhancement: false,
      },
      languages: {
        python: false,
        javascript: false,
        php: false,
        java: false,
        ruby: false,
        swift: false,
        dart: false,
      },
      textToSearch: '',
      issueState: 'open',
      results: {},
      url: '',
    };
  }

  createUrl = () => {
    const { issueState, labels, languages, textToSearch } = this.state;
    const baseUrl = 'https://api.github.com/search/issues?q=';
    const sortOptions = '&sort=created&order=desc&per_page=20';
    const formattedText = formatTextToSearch(textToSearch);

    const activeLabels = Object.keys(labels).filter(item => labels[item]);
    const formattedLabels = formatLabelsForUrl(activeLabels);
    const joinedLabels = formattedLabels.map(label => `+label:${label}`).join('');

    const activeLanguage = Object.keys(languages).filter(item => languages[item]);
    const formattedLanguage = activeLanguage.map(language => `+language:${language}`).join('');

    return `${baseUrl +
      formattedText}type:issue${joinedLabels}${formattedLanguage}+state:${issueState}${sortOptions}`;
  };

  getIssues = async event => {
    event.preventDefault();
    const finalUrl = this.createUrl();
    const response = await fetch(finalUrl);
    const json = await response.json();
    this.setState({ results: json, url: finalUrl }, () =>
      console.log('results', this.state.results)
    );
  };

  handleTextChange = event => {
    this.setState({ textToSearch: event.target.value });
  };

  handleToggleChange = event => {
    const { labels, languages } = this.state;
    const selectedType = event.target.dataset.type;
    const selectedName = event.target.name;

    if (selectedType === 'label') {
      this.setState({
        labels: { ...labels, [selectedName]: !labels[selectedName] },
      });
    } else if (selectedType === 'language') {
      const currentLanguages = languages;
      Object.keys(currentLanguages).forEach(key => {
        if (key === selectedName) {
          currentLanguages[key] = !currentLanguages[key];
        } else {
          currentLanguages[key] = false;
        }
      });
      this.setState({
        languages: { ...currentLanguages },
      });
    }
  };

  render() {
    const { results, textToSearch, labels, languages, url } = this.state;

    return (
      <div className="wrapper">
        <Title />

        <div className="toggles-group">
          <Labels labels={labels} handleToggleChange={this.handleToggleChange} />
          <Languages languages={languages} handleToggleChange={this.handleToggleChange} />
        </div>
        <SearchBar
          handleTextChange={this.handleTextChange}
          handleButtonClick={this.getIssues}
          textToSearch={textToSearch}
        />

        <br />
        <br />
        <br />

        {/* url display for testing */}
        {results.items && url}

        {/* {results.total_count === 0 && 'hi'} */}
        {results.items && <SearchResults results={results} />}
      </div>
    );
  }
}

export default App;
