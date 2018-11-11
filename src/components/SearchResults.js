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

          {/* First 300 characters of body */}
          <p>
            {item.body.length === 0
              ? '(no text)'
              : item.body.substr(0,300) + '...'}
          </p>

          <p>
            {/* How long ago created */}
            {moment(item.created_at).fromNow()}

            {/*  */}

            {/* Some issues have an array of labels */}
            {/* {item.labels.map(label => {
              const labelColor = '#' + label.color
              return (
                <span key={label.id} style={{color: labelColor}}>
                {label.name}
              </span>
              )
            })} */}
          </p>

          <br />
          
        </div>
      )
    })

  return (
    <div className="results">

      {/* Total issues returned */}
      {props.results.items[0] && 
      <h4>
        Total results: {results.total_count}
      </h4>}

      {/* MAPPED ITEMS */}
      {items}
    </div>
  )
}

export default SearchResults
