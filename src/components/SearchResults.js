import React from 'react'

const SearchResults = (props) => {

    const items = props.results.items.map(item => {
        return (
            <div>{item.url}</div>
        )
    })



    return (

    
        <div className="results">
          <h3>Results:</h3>

          {console.log('props', items)}
          
        {items}



        </div>
    )
}

export default SearchResults