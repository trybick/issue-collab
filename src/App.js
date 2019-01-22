import React, { Component } from 'react'
import './App.scss'

import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SearchBar />
      </div>
    )
  }
}

export default App
