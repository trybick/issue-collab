import React from 'react';
import Title from './Title';
import SearchResults from '../search/SearchResults';
import '../../style.scss';
import ToggleButtons from '../search/ToggleButtons.js'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabledLanguages: [],
      enabledLabels: [],
      providedText: '',
      issueState: 'open',
      results: { items: [] }
    };
  }

  handleTextChange = event => {
    this.setState({ providedText: event.target.value });
  };

  getIssues = async () => {
    const { issueState, enabledLabels, providedText } = this.state;

    const baseUrl = 'https://api.github.com/search/issues?q=type:issue';
    const sortOptions = '&sort=created&order=desc&per_page=30';
    let completeLabels = '';

    if (enabledLabels.length === 1) {
      completeLabels = `+label:${enabledLabels[0]}`;
    } else if (enabledLabels.length > 1) {
      completeLabels = enabledLabels.map = label => {
        return '+label:$' + label;
      };
    }

    let completeUrl =
      baseUrl +
      completeLabels +
      `+${providedText}+state:${issueState}` +
      sortOptions;

    const response = await fetch(completeUrl);
    const json = await response.json();

    this.setState({ results: json }, () =>
      console.log('results', this.state.results)
    );
  };

  render() {
    const { results, providedText } = this.state;

    const totalResults = results.items[0] && (
      <h4>Total results: {results.total_count.toLocaleString()}</h4>
    );

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

        <ToggleButtons />

        <div className='results'>
          {totalResults}
          <SearchResults results={results} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
