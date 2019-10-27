import React from 'react';

const KeywordsInput = props => {
  const { handleTextChange, textToSearch } = props;
  return (
    <form id="issues-form">
      <input
        className="keywords-text-input"
        type="text"
        placeholder="Enter keywords"
        value={textToSearch}
        onChange={handleTextChange}
      />
    </form>
  );
};

export default KeywordsInput;
