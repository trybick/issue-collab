import React from 'react'

const SearchResults = (props) => {

    // If items is truthy, map over them
    const items = props.results.items && props.results.items.map(item => {
        return (
            <div>{item.url}</div>
        )
    })

    return (

        <div className="results">
          <h3>Results:</h3>
          
        {/* Mapped items */}
        {items}

        </div>
    )
}

export default SearchResults