import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        bill: {
          name: '',
          amount: '',
          due: '1' // avoids issue when onChange doesn't register
        }
      }
    }


    render() {
        const {bill} = this.state
    
        return (
        <div>
            <h3 className="section-title">Enter Your Search</h3>
            <input type="text" name="search-input"></input>
        </div>
    )
    }
}



export default SearchBar