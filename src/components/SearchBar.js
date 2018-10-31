import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        terms: {
            status: 'open',
            language: 'javascript'
        },
        results: []
      }
    }

    getIssues = async () => {
        // Set variables for search URL
        let status = this.state.terms.status        
        let language = this.state.terms.language 

        let url = `https://api.github.com/search/issues?q=+type:issue+language=${language}+state:${status}&sort=created&order=desc&per_page=100`

        // Make GET request
        const response = await fetch(url)
        const json = await response.json()

        // Update state with results
        this.setState({results: json})
        console.log('items in state', this.state.results.items)
    }


    render() {
        // const {results} = this.state

        // const resultsList = this.state.results.map(result => {
        //     return (
        //         null
        //     )
        // })
    
        return (
        <div>
            <h3 className="section-title">Enter Your Search</h3>
            <input type="text" name="search-input"></input>

            <button onClick={this.getIssues}>Get Results</button>
        </div>
    )
    }
}



export default SearchBar