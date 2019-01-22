import React from 'react'
import SearchResults from './SearchResults'
import './SearchBar.scss'
// import ToggleButton from 'react-toggle-button'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Search terms to send to API
      terms: {
        text: null, // change to null if crashing
        status: 'open'
      },
      // Results returned from API
      results: { items: [] }
    }
  }

  // API call when button is clicked
  getIssues = async () => {
    // Variables for search URL
    const { status, text } = this.state.terms

    // URL we are customizing then fetching
    let url = `https://api.github.com/search/issues?q=type:issue+${text}+state:${status}&sort=created&order=desc&per_page=30`

    // Make GET request
    const response = await fetch(url)
    const json = await response.json()
    console.log('json response', json)

    // Update state with results
    this.setState({ results: json })
    console.log('items in state', this.state.results.items)
    console.log('everything in state', this.state)
  }

  // Handle input change and update state
  handleChange = event => {
    const newTerms = { ...this.state.terms }
    newTerms.text = event.target.value
    this.setState({ terms: newTerms }, () => console.log('state', this.state))
  }

  render() {
    const { results } = this.state
    return (
      // Main search section
      <div className="searchbar-wrapper">
        <div>
          <h3 className="section-title">Enter Your Search</h3>

          <input
            type="text"
            name="search-text"
            value={this.state.terms.text}
            onChange={this.handleChange}
          />

          <button onClick={this.getIssues}>Get Results</button>
        </div>

        {/* Number of results */}
        {results.items[0] && <h4>Total results: {results.total_count}</h4>}

        {/* Pass search results to child component */}
        <SearchResults results={results} />
      </div>
    )
  }
}

export default SearchBar
