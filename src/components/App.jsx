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
      toggledLabels: {
        bug: false,
        easy: false,
        documentation: false,
        helpWanted: false,
        goodFirstIssue: false,
      },
      toggledLanguages: {
        python: false,
        javascript: false,
        php: false,
        java: false,
        ruby: false,
      },
      textToSearch: '',
      issueState: 'open',
      results: {},
      url: '',
    };
  }

  createUrl = () => {
    const { issueState, toggledLabels, toggledLanguages, textToSearch } = this.state;
    const baseUrl = 'https://api.github.com/search/issues?q=';
    const sortOptions = '&sort=created&order=desc&per_page=20';
    const formattedText = formatTextToSearch(textToSearch);

    const activeLabels = Object.keys(toggledLabels).filter(item => toggledLabels[item]);
    const formattedLabels = formatLabelsForUrl(activeLabels);
    const joinedLabels = formattedLabels.map(label => `+label:${label}`).join('');

    const activeLanguage = Object.keys(toggledLanguages).filter(item => toggledLanguages[item]);
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
    const { toggledLabels, toggledLanguages } = this.state;
    const selectedType = event.target.dataset.type;
    const selectedName = event.target.name;

    if (selectedType === 'label') {
      this.setState({
        toggledLabels: { ...toggledLabels, [selectedName]: !toggledLabels[selectedName] },
      });
    } else if (selectedType === 'language') {
      const currentLanguages = toggledLanguages;
      Object.keys(currentLanguages).forEach(key => {
        if (key === selectedName) {
          currentLanguages[key] = !currentLanguages[key];
        } else {
          currentLanguages[key] = false;
        }
      });
      this.setState({
        toggledLanguages: { ...currentLanguages },
      });
    }
  };

  render() {
    const { results, textToSearch, toggledLabels, toggledLanguages, url } = this.state;

    return (
      <div className="wrapper">
        <Title />

        <Labels labels={toggledLabels} handleToggleChange={this.handleToggleChange} />
        <Languages languages={toggledLanguages} handleToggleChange={this.handleToggleChange} />

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

        {results.items && <SearchResults results={results} />}
      </div>
    );
  }
}

export default App;
