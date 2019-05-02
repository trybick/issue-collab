import React from 'react';
import Button from '../core/Button';

const SearchBar = props => {
  const { handleButtonClick, handleTextChange, searchText } = props;
  return (
    <div className="searchbar">
      <h4>search terms (optional):</h4>
      <form>
        <input type="text" value={searchText} onChange={handleTextChange} />
        <br />
        <br />
        <Button className="btn-get-issues" onClick={handleButtonClick} typeName="submit">
          Get Issues
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
