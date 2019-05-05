import React from 'react';

const KeywordsInput = props => {
  const { handleTextChange, searchText } = props;
  return (
    <div className="keywords-input">
      <form id="issues-form">
        {/* <h4 className="keywords-input-title">keywords (optional):</h4> */}
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
