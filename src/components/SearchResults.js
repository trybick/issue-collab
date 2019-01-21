import React from 'react'
import moment from 'moment'

const SearchResults = props => {
  const { results } = props

  const items =
    // Check for truthy and map over items
    results.items &&
    results.items.map(item => {
      // Split URL to get 'user/repo'
      const htmlUrl = item.html_url.split('/')

      return (
        <div className="result" key={item.id}>
          {/* Title with hyperlink */}
          <div>
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </div>

          {/* First 300 characters of body */}
          <p>
            {item.body.length === 0 ? '(no text)' : item.body.substr(0, 300)}
            {item.body.length > 300 ? '...' : null}
          </p>

          {/* User and Repo name */}
          <div>{htmlUrl[3] + '/' + htmlUrl[4]}</div>

          {/* How long ago created */}
          <div>{moment(item.created_at).fromNow()}</div>

          {/* Some issues have an array of labels */}
          {/* <div>
            {item.labels.map(label => {
              const labelColor = '#' + label.color
              return (
                <span key={label.id} style={{color: labelColor}}>
                {label.name}
              </span>
              )
            })}
          </div> */}

          <br />
          <br />
        </div>
      )
    })

  return (
    <div className="results">
      {/* Total issues returned */}
      {/* {props.results.items[0] && <h4>Total results: {results.total_count}</h4>} */}

      {/* MAPPED ITEMS */}
      {items}
    </div>
  )
}

export default SearchResults
