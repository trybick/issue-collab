import React, { Component } from 'react'
import './App.scss'

import Title from './components/Title'

import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Title />
        <SearchBar />
      </div>
    )
  }
}

export default App
