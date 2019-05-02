/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Title from './core/Title';
import SearchResults from './search/SearchResults';
import '../styles/main.scss';
import '../styles/react-toggle.scss';
import SearchBar from './search/SearchBar';
import Labels from './toggles/Labels';
import Languages from './toggles/Languages';
import { formatLabels } from '../utils/formatting';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledLabels: {
        bug: false,
        easy: false,
        documentation: false,
        helpWanted: false,
      },
      toggledLanguages: {
        python: false,
        javascript: false,
        php: false,
        java: false,
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
    const sortOptions = '&sort=created&order=desc&per_page=30';
    let finalText = '';

    const activeLabels = Object.keys(toggledLabels).filter(item => toggledLabels[item]);
    const convertedLabels = formatLabels(activeLabels);
    const formattedLabels = convertedLabels.map(label => `+label:${label}`).join('');

    const activeLanguage = Object.keys(toggledLanguages).filter(item => toggledLanguages[item]);
    const formattedLanguage = activeLanguage.map(language => `+language:${language}`).join('');

    if (textToSearch !== '') {
      finalText = `${textToSearch}+`;
    }
    return `${baseUrl +
      finalText}type:issue${formattedLabels}${formattedLanguage}+state:${issueState}${sortOptions}`;
  };

  getIssues = async event => {
    event.preventDefault();
    const finalUrl = this.createUrl();
    const response = await fetch(finalUrl); // finalUrl variable used for testing
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
    const toggleType = event.target.dataset.type;

    if (toggleType === 'label') {
      this.setState({
        toggledLabels: { ...toggledLabels, [event.target.name]: !toggledLabels[event.target.name] },
      });
    } else if (toggleType === 'language') {
      // enable toggle on the clicked item and disable all others
      const currentLanguages = toggledLanguages;
      Object.keys(currentLanguages).forEach(key => {
        if (key === event.target.name) {
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
        <Labels itemList={toggledLabels} handleToggleChange={this.handleToggleChange} />
        <Languages itemList={toggledLanguages} handleToggleChange={this.handleToggleChange} />
        <SearchBar
          handleTextChange={this.handleTextChange}
          handleButtonClick={this.getIssues}
          textToSearch={textToSearch}
        />
        <br />
        <br />
        <br />
        {results.items && url} {/* for testing */}
        {results.items && <SearchResults results={results} />}
      </div>
    );
  }
}

export default App;
