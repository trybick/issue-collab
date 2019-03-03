import React from 'react';
import SearchResults from './SearchResults';
import '../../style.scss';
import Button from '../core/Button.js'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLanguages: [],
      activeLabels: [],
      providedText: '',
      issueState: 'open',
      results: { items: [] }
    };
  }

  handleChange = event => {
    this.setState({ providedText: event.target.value }, () =>
      console.log('state', this.state)
    );
  };

  getIssues = async () => {
    const { issueState, activeLabels, providedText } = this.state;

    const baseUrl = 'https://api.github.com/search/issues?q=type:issue'
    const sortOptions = '&sort=created&order=desc&per_page=30'

    let completeLabels = ''

    if (activeLabels.length === 1) {
      completeLabels = `+label:${activeLabels[0]}`
    } else if (activeLabels.length > 1) {
      completeLabels = activeLabels.map = label => {
        return '+label:$' + label
      }
      // return completeLabels
    }


    let completeUrl = baseUrl + completeLabels + `+${providedText}+state:${issueState}` + sortOptions;

    const response = await fetch(completeUrl);
    const json = await response.json();

    this.setState({ results: json });
  };

  onClick = event => {
    console.log('hi', event.target);

    const availableLabels = ['javascript', 'python'];
    const name = event.target.name;

    if (availableLabels.includes(name)) {
      this.setState({
        activeLabels: [name]
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
