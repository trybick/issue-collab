/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Title from './Title';
import SearchResults from '../search/SearchResults';
import '../../style.scss';
import '../../react-toggle.scss';
import SearchBar from '../search/SearchBar';
import LabelToggles from '../search/LabelToggles';

class App extends React.Component {
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
      searchText: '',
      issueState: 'open',
      results: {},
      url: '',
    };
  }

  formatUrl = () => {
    const { issueState, toggledLabels, toggledLanguages, searchText } = this.state;
    const baseUrl = 'https://api.github.com/search/issues?q=type:issue';
    const sortOptions = '&sort=created&order=desc&per_page=30';
    let finalLabels = '';
    //   let finalLanguages = '';
    let finalText = '';

    // Get enabled labels from state
    const activeLabels = Object.keys(toggledLabels).filter(item => toggledLabels[item]);

    //   finalLanguages = toggledLanguages.map(language => `+language:${language}`).join('');

    if (searchText !== '') {
      finalText = `+${searchText}`;
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
    this.setState({ searchText: event.target.value });
  };

  handleToggleChange = event => {
    const { toggledLabels } = this.state;
    this.setState({
      toggledLabels: { ...toggledLabels, [event.target.name]: !toggledLabels[event.target.name] },
    });
  };

  render() {
    const { results, searchText, toggledLabels, url } = this.state;

    return (
      <div className="wrapper">
        <Title />
        <LabelToggles isChecked={toggledLabels} handleToggleChange={this.handleToggleChange} />
        <SearchBar
          handleTextChange={this.handleTextChange}
          handleButtonClick={this.getIssues}
          searchText={searchText}
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
