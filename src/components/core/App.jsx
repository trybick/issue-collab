/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Title from './Title';
import SearchResults from '../search/SearchResults';
import '../../style.scss';
import '../../react-toggle.scss';
import SearchBar from '../search/SearchBar';
import LabelToggles from '../search/LabelToggles';
import LanguageToggles from '../search/LanguageToggles';

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

  formatUrl = () => {
    const { issueState, toggledLabels, toggledLanguages, textToSearch } = this.state;
    const baseUrl = 'https://api.github.com/search/issues?q=type:issue';
    const sortOptions = '&sort=created&order=desc&per_page=30';
    let finalLabels = '';
    //   let finalLanguages = '';
    let finalText = '';

    // Get enabled labels from state
    const activeLabels = Object.keys(toggledLabels).filter(item => toggledLabels[item]);

    //   finalLanguages = toggledLanguages.map(language => `+language:${language}`).join('');

    if (textToSearch !== '') {
      finalText = `+${textToSearch}`;
    }

    // Join labels together
    finalLabels = activeLabels.map(label => `+label:${label}`).join('');

    // Join all parts
    return `${baseUrl +
      finalLabels +
      // finalLanguages +
      finalText}+state:${issueState}${sortOptions}`;
  };

  getIssues = async event => {
    event.preventDefault();
    const finalUrl = this.formatUrl();
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
      this.setState({
        toggledLanguages: {
          ...toggledLanguages,
          [event.target.name]: !toggledLanguages[event.target.name],
        },
      });
    }
  };

  render() {
    const { results, textToSearch, toggledLabels, toggledLanguages, url } = this.state;

    return (
      <div className="wrapper">
        <Title />
        <LabelToggles isChecked={toggledLabels} handleToggleChange={this.handleToggleChange} />
        <LanguageToggles
          isChecked={toggledLanguages}
          handleToggleChange={this.handleToggleChange}
        />
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
