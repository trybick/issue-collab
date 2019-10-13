import React from 'react';

const KeywordsInput = props => {
  const { handleTextChange, textToSearch } = props;
  return (
    <div className="keywords-input">
      <form id="issues-form">
        <input
          className="keywords-text-input"
          type="text"
          placeholder="Enter keywords"
          value={textToSearch}
          onChange={handleTextChange}
        />
      </form>
    </div>
  );
};

export default KeywordsInput;
