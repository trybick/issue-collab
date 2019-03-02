import React from 'react';
import SearchResults from './SearchResults';
import '../../style.scss';
import Button from '../core/Button.js'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLanguages: [],
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

  onClick = event => {
    console.log('hi', event.target);

    const languages = ['javascript', 'python'];
    const name = event.target.name;

    if (languages.includes(name)) {
      this.setState({
        activeLanguages: name
      })
    }

    console.log('2', this.state);

  }

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

        <div className="toggle-buttons">
          <Button
            name="javascript"
            onClick={this.onClick}
            text="JavaScript"
          />
        </div>

        {results.items[0] && (
          <h4>Total results: {results.total_count.toLocaleString()}</h4>
        )}

        <SearchResults results={results} />
      </div>
    );
  }
}

export default SearchBar;
