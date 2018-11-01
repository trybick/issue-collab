import React from 'react'
import SearchResults from './SearchResults'

class SearchBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        terms: {
            text: '',
            status: 'open',
            language: 'javascript'
        },
        results: {items: []}
      }
    }

    // When button is clicked, make API call
    getIssues = async () => {
        // Variables for search URL
        let status = this.state.terms.status        
        let language = this.state.terms.language 
        let text = this.state.terms.text

        let url = `https://api.github.com/search/issues?q=${text}+type:issue+language=${language}+state:${status}&sort=created&order=desc&per_page=100`

        // Make GET request
        const response = await fetch(url)
        const json = await response.json()

        // Update state with results
        this.setState({results: json})
        console.log('items in state', this.state.results.items)
    }

    // Handle input change and update state
    handleChange = (event) => {
        const newTerms = {...this.state.terms}
        newTerms.text = event.target.value
        this.setState({terms: newTerms})
    }

    render() {    
        return (
        <div>
            <h3 className="section-title">Enter Your Search</h3>
            
            <input type="text" name="search-text" value={this.state.terms.text} onChange={this.handleChange}></input>

            <button onClick={this.getIssues}>Get Results</button>

            {/* Pass search results to child component */}
            <SearchResults results={this.state.results} />

        </div>
    )
    }
}



export default SearchBar