import React from 'react';

const KeywordsInput = props => {
  const { handleTextChange, searchText } = props;
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

export default KeywordsInput;
