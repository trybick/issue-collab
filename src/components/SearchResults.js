import React from "react"

const SearchResults = props => {
  const items =
    // If items is truthy
    props.results.items &&
    props.results.items.map(item => {
      return (
        <div key={item.id}>
          <p>
            {/* Title inside a link to issue */}
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </p>

          {/* Created date/time */}
          <p>
            Created at:
            {item.created_at}
          </p>

          {/* Body text */}
          {/* <p>{item.body}</p> */}

          <br />
        </div>
      )
    })

  return (
    // Main results section
    <div className="results">
      <h3>Results:</h3>

      {/* Mapped items */}
      {items}
    </div>
  )
}

export default SearchResults
