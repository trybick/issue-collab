import React from 'react';
import Title from './Title';
import SearchResults from '../search/SearchResults';
import '../../style.scss';
import ToggleButtons from '../search/ToggleButtons.js';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabledLanguages: [],
      enabledLabels: [],
      providedText: '',
      issueState: 'open',
      results: {},
      totalResults: ''
    };
  }

  handleTextChange = event => {
    this.setState({ providedText: event.target.value });
  };

  onToggle = event => {
    const availableLabels = ['javascript', 'bug'];

    // TODO: create function shouldAdd - check if label has already been added and is in array
    if (availableLabels.includes(event.target.name)) {
      this.setState(
        {
          enabledLabels: [...this.state.enabledLabels, event.target.name]
        }
      );
    }
  };

  formatUrl = () => {
    const { issueState, enabledLabels, providedText } = this.state;

    const baseUrl = 'https://api.github.com/search/issues?q=type:issue';
    const sortOptions = '&sort=created&order=desc&per_page=30';

    // IDEA: can this work for creating URL from object?
    // var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');

    let completeLabels = '+';
    if (enabledLabels.length === 1) {
      completeLabels = `+label:${enabledLabels[0]}`;
    } else if (enabledLabels.length > 1) {
      completeLabels = enabledLabels.map = label => {
        return '+label:$' + label;
      };
    }

    let textToSend = '';
    if (providedText !== '') {
      textToSend = providedText + '+';
    }

    const completeUrl =
      baseUrl +
      completeLabels +
      textToSend +
      `state:${issueState}` +
      sortOptions;

    return completeUrl;
  };

  getIssues = async () => {
    const urlToSend = this.formatUrl();

    const response = await fetch(urlToSend);
    const json = await response.json();

    this.setState(
      { results: json, },
      () => console.log('results', this.state.results)
    );

    console.log('url', urlToSend);
  };

  render() {
    const { results, providedText } = this.state;

    return (
      <div className='wrapper'>
        <Title />

        <div className='searchbar'>
          <h3>Enter Your Search</h3>
          <input
            type='text'
            name='search-text'
            value={providedText}
            onChange={this.handleTextChange}
          />
          <button onClick={this.getIssues}>Get Results</button>
        </div>

        <ToggleButtons onToggle={this.onToggle} />

        {results.items && 
          <SearchResults results={results} />}
      </div>
    );
  }
}

export default SearchBar;
