import React from 'react';

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
      </form>
    </div>
  );
};

export default SearchBar;
