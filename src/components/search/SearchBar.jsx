import React from 'react';
import Button from '../core/Button';

const SearchBar = props => {
  const { handleButtonClick, handleTextChange, searchText } = props;
  return (
    <div className="searchbar">
      <h4 className="searchbar-title">search terms (optional):</h4>
      <form>
        <input className="text-input" type="text" value={searchText} onChange={handleTextChange} />
        <br />
        <br />
        <Button className="get-issues-btn" onClick={handleButtonClick} typeName="submit">
          Get Issues
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
