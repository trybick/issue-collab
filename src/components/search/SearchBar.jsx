import React from 'react';
import Button from '../core/Button';

const SearchBar = props => {
  const { handleButtonClick, handleTextChange, searchText } = props;
  return (
    <div className="searchbar">
      <h3>Enter Your Search</h3>
      <form>
        <input type="text" value={searchText} onChange={handleTextChange} />
        <button type="submit" onClick={handleButtonClick}>
          Get Results
        </button>
        <Button className="btn-get-issues" onClick={handleButtonClick} typeName="submit">
          test
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
