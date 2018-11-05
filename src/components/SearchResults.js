import React from "react"
import moment from "moment"

const SearchResults = props => {
  const { results } = props

  const items =
    // Check for truthy and map over items
    results.items && 
    results.items.map(item => {
      return (
        <div key={item.id}>
          {/* Title with hyperlink */}
          <p>
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </p>

          {/* How long ago created */}
          <p>
            {moment(item.created_at).fromNow()}
          </p>

          {/* Body text */}
          {/* <p>{item.body}</p> */}

          <br />
        </div>
      )
    })



  return (
    <div className="results">

      {/* Total issues returned */}
      {props.results.items[0] && 
      <h4>
        Total amount: {results.total_count}
      </h4>}

      {/* MAPPED ITEMS */}
      {items}
    </div>
  )
}

export default SearchResults
