/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Title from './Title';
import SearchResults from '../search/SearchResults';
import '../../style.scss';
import '../../react-toggle.scss';
import LabelToggles from '../search/LabelToggles';
import LanguageToggles from '../search/LanguageToggles';

import Toggle from 'react-toggle';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledLanguages: [],
      toggledLabels: [],
      providedText: '',
      issueState: 'open',
      results: {},
      // react-toggle
      labelBug: false
    };
  }

  onToggleLabel = event => {
    let labelName = event.target.name;
    const { toggledLabels } = this.state;
    const stateArray = [...toggledLabels];
    const index = stateArray.indexOf(labelName);

    if (labelName === 'good+first+issue') {
      labelName = `"good+first+issue"`;
    } else if (labelName === 'help+wanted') {
      labelName = `"help+wanted"`;
    }

    if (index === -1) {
      this.setState({
        toggledLabels: [...toggledLabels, labelName]
      });
    } else {
      stateArray.splice(index, 1);
      this.setState({ toggledLabels: stateArray });
    }
  };

  onToggleLanguage = event => {
    const { toggledLanguages } = this.state;
    const stateArray = [...toggledLanguages];
    const index = stateArray.indexOf(event.target.name);

    if (index !== -1) {
      stateArray.splice(index, 1);
      this.setState({ toggledLabels: stateArray });
    } else {
      this.setState({
        toggledLanguages: [...toggledLanguages, event.target.name]
      });
    }
  };

  formatUrl = () => {
    const { issueState, toggledLabels, toggledLanguages, providedText } = this.state;
    const baseUrl = 'https://api.github.com/search/issues?q=type:issue';
    const sortOptions = '&sort=created&order=desc&per_page=30';
    let finalLabels = '';
    let finalLanguages = '';
    let finalText = '';

    finalLabels = toggledLabels.map(label => `+label:${label}`).join('');

    finalLanguages = toggledLanguages.map(language => `+language:${language}`).join('');

    if (providedText !== '') {
      finalText = `+${providedText}`;
    }

    const completeUrl = `${baseUrl +
      finalLabels +
      finalLanguages +
      finalText}+state:${issueState}${sortOptions}`;

    return completeUrl;
  };

  getIssues = async () => {
    const finalUrl = this.formatUrl();
    const response = await fetch(finalUrl); // finalUrl variable used for testing
    const json = await response.json();
    this.setState({ results: json }, () => console.log('results', this.state.results));
  };

  handleTextChange = event => {
    this.setState({ providedText: event.target.value });
  };

  // Using react-toggle
  handleToggleChange = event => {
    this.setState({ labelBug: !this.state.labelBug }, () =>
      console.log('state', this.state.labelBug)
    );
  };

  render() {
    const { results, providedText, toggledLabels } = this.state;

    return (
      <div className="wrapper">
        <Title />

        <div className="searchbar">
          <h3>Enter Your Search</h3>
          <input
            type="text"
            name="search-text"
            value={providedText}
            onChange={this.handleTextChange}
          />
        </div>

        <button type="button" onClick={this.getIssues}>
          Get Results
        </button>

        <br />
        <br />

        <label>
          <Toggle
            defaultChecked={this.state.labelBug}
            icons={false}
            onChange={this.handleToggleChange}
          />
          <span>bug</span>
        </label>

        <LabelToggles onToggle={this.onToggleLabel} activeLabels={toggledLabels} />
        <LanguageToggles onToggle={this.onToggleLanguage} />

        {results.items && <SearchResults results={results} />}
      </div>
    );
  }
}

export default SearchBar;
