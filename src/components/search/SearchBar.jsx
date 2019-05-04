import React from 'react';
import Button from '../core/Button';

const SearchBar = props => {
  const { handleButtonClick, handleTextChange, searchText } = props;
  return (
    <div className="searchbar">
      <form>
        {/* <h4 className="searchbar-title">keywords (optional):</h4> */}
        <input
          className="text-input"
          type="text"
          placeholder="keywords (optional)"
          value={searchText}
          onChange={handleTextChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
