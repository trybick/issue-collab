import React, { Component } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <SearchBar />
        
        <SearchResults />

      </div>
    );
  }
}

export default App
