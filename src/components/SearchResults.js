import React from 'react'

const SearchResults = (props) => {

    const items = props.results && props.results.items && Array.isArray(props.results.items) && props.results.items.length && props.results.items.map(item => {
        return (
            <div>{item.url}</div>
        )
    })

    return (

    
        <div className="results">
          <h3>Results:</h3>
          
        {items}

        </div>
    )
}

export default SearchResults