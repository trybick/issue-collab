import React from 'react'

const SearchResults = (props) => {

    // If items is truthy, map over them
    const items = props.results.items && props.results.items.map(item => {
        return (
            <div key={item.id}>
                <p><a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.title}</a></p>
                <p>Created at:{item.created_at}</p>
                {/* <p>URL: {item.html_url}</p> */}
                
                <br></br>
                
            </div>
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