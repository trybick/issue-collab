import React from "react"
import SearchResults from "./SearchResults"
import './SearchBar.scss'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Search terms to send to API
      terms: {
        text: "",
        status: "open",
        language: "javascript"
      },
      // Results returned from API
      results: { items: [] }
    }
  }

  // API call when button is clicked
  getIssues = async () => {
    // Variables for search URL
    let status = this.state.terms.status
    let language = this.state.terms.language
    let text = this.state.terms.text

    // URL we are customizing then fetching
    // let url = `https://api.github.com/search/issues?q=${text}+
    //   type:issue+
    //   language=${language}+
    //   state:${status}&
    //   sort=created&order=desc&per_page=25`

    let url = `https://api.github.com/search/issues?q=${text}+type:issue+language=${language}+state:${status}&sort=created&order=desc&per_page=25`

    // Make GET request
    const response = await fetch(url)
    const json = await response.json()
    console.log('json response', json)

    // Update state with results
    this.setState({ results: json })
    console.log('items in state', this.state.results.items)
  }

  // Handle input change and update state
  handleChange = event => {
    const newTerms = { ...this.state.terms }
    newTerms.text = event.target.value
    this.setState({terms: newTerms}, () => console.log('state', this.state))
  }

  render() {
    return (
      // Main search section
      <div className="searchbar-wrapper">
        <h3 className="section-title">Enter Your Search</h3>

        {/* Text box input */}
        <input
          type="text"
          name="search-text"
          value={this.state.terms.text}
          onChange={this.handleChange}
        />

        {/* GET button */}
        <button onClick={this.getIssues}>Get Results</button>

        {/* Pass search results to child component */}
        <SearchResults results={this.state.results} />
      </div>
    )
  }
}

export default SearchBar
