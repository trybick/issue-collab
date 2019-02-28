import React from 'react';
import SearchResults from './SearchResults';
import '../../style.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      providedLabels: 'javascript',
      providedText: '',
      issueState: 'open',
      results: { items: [] }
    };
  }

  getIssues = async () => {
    const { issueState, providedLabels, providedText } = this.state;

    let url = `https://api.github.com/search/issues?q=type:issue+${providedText}+state:${issueState}+label:${providedLabels}&sort=created&order=desc&per_page=30`;

    const response = await fetch(url);
    const json = await response.json();

    this.setState({ results: json });
  };

  handleChange = event => {
    this.setState({ providedText: event.target.value }, () =>
      console.log('state', this.state)
    );
  };

  render() {
    const { results, providedText } = this.state;

    return (
      <div>
        <h3 className='section-title'>Enter Your Search</h3>

        <input
          type='text'
          name='search-text'
          value={providedText}
          onChange={this.handleChange}
        />

        <button onClick={this.getIssues}>Get Results</button>

        {results.items[0] && (
          <h4>Total results: {results.total_count.toLocaleString()}</h4>
        )}

        <SearchResults results={results} />
      </div>
    );
  }
}

export default SearchBar;
