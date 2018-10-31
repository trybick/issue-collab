import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        results: {
          name: '',
          amount: '',
          due: '1' 
        }
      }
    }


    render() {
        const {results} = this.state

        const resultsList = this.state.results.map(result => {
            return (
                null
            )
        })
    
        return (
        <div>
            <h3 className="section-title">Enter Your Search</h3>
            <input type="text" name="search-input"></input>
        </div>
    )
    }
}



export default SearchBar