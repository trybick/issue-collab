import React, { Component } from 'react'
import './App.scss'

import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Navbar />

        <SearchBar />
      </div>
    )
  }
}

export default App
