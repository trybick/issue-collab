import React, { Component } from 'react';
import '../../style.scss';

import Title from './Title';

import SearchBar from '../search/SearchBar';

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Title />
        <SearchBar />
      </div>
    );
  }
}

export default App;
