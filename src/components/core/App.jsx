/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Title from './Title';
import SearchResults from '../search/SearchResults';
import '../../style.scss';
import '../../react-toggle.scss';

import Toggle from 'react-toggle';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledLanguages: [],
      toggledLabels: {
        bug: false,
        easy: false,
        documentation: false,
        helpWanted: false,
      },
      providedText: '',
      issueState: 'open',
      results: {},
    };
  }

  // formatUrl = () => {
  //   const { issueState, toggledLabels, toggledLanguages, providedText } = this.state;
  //   const baseUrl = 'https://api.github.com/search/issues?q=type:issue';
  //   const sortOptions = '&sort=created&order=desc&per_page=30';
  //   let finalLabels = '';
  //   let finalLanguages = '';
  //   let finalText = '';

  //   finalLabels = toggledLabels.map(label => `+label:${label}`).join('');

  //   finalLanguages = toggledLanguages.map(language => `+language:${language}`).join('');

  //   if (providedText !== '') {
  //     finalText = `+${providedText}`;
  //   }

  //   const completeUrl = `${baseUrl +
  //     finalLabels +
  //     finalLanguages +
  //     finalText}+state:${issueState}${sortOptions}`;

  //   return completeUrl;
  // };

  formatUrl = () => {
    const { issueState, toggledLabels, toggledLanguages, providedText } = this.state;
    const baseUrl = 'https://api.github.com/search/issues?q=type:issue';
    const sortOptions = '&sort=created&order=desc&per_page=30';
    let finalLabels = '';

    // Get enabled (true) labels from state
    const activeLabels = Object.keys(toggledLabels).filter(item => toggledLabels[item]);
    console.log('enabled keys:', activeLabels);

    // Join labels together
    finalLabels = activeLabels.map(label => `+label:${label}`).join('');

    // Join all parts
    return `${baseUrl}+state:${issueState}${finalLabels}${sortOptions}`;
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

  handleToggleChange = () => {
    const { toggledLabels } = this.state;
    this.setState(
      {
        toggledLabels: { ...toggledLabels, bug: !toggledLabels.bug },
      },
      () => console.log('toggle change', this.state.toggledLabels.bug)
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

        <div>
          <Toggle
            defaultChecked={toggledLabels.bug}
            icons={false}
            onChange={this.handleToggleChange}
          />
          <span>bug</span>
        </div>

        <div>
          <Toggle
            defaultChecked={toggledLabels.easy}
            icons={false}
            onChange={this.handleToggleChange}
          />
          <span>easy</span>
        </div>

        <div>
          <Toggle
            defaultChecked={toggledLabels.documentation}
            icons={false}
            onChange={this.handleToggleChange}
          />
          <span>documentation</span>
        </div>

        <div>
          <Toggle
            defaultChecked={toggledLabels.helpWanted}
            icons={false}
            onChange={this.handleToggleChange}
          />
          <span>help wanted</span>
        </div>

        {results.items && <SearchResults results={results} />}
      </div>
    );
  }
}

export default SearchBar;
