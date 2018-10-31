import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        terms: {
            status: 'open',
            language: 'javascript'
        },
        results: {
          name: '',
          amount: '',
          due: '1' 
        }
      }
    }

    getIssues = async () => {
        let status = this.state.terms.status        
        let language = this.state.terms.language        

        let url = `https://api.github.com/search/issues?q=+type:issue+language=${language}+state:${status}&sort=created&order=desc&per_page=100`

        const response = await fetch(url)
        const json = await response.json()

        console.log(json)
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