import React from 'react';
import KeywordsInput from './KeywordsInput';
import Button from '@material-ui/core/Button';
import './SearchContainer.scss';

const SearchContainer = ({
  handleTextChange,
  textToSearch,
  isGetButtonDisabled,
  getIssues,
  onReset,
}) => (
  <div className="search-container">
    <div className="search-container-input">
      <KeywordsInput handleTextChange={handleTextChange} textToSearch={textToSearch} />
    </div>
    <div className="button-group">
      <Button
        className="get-btn"
        color="primary"
        variant="contained"
        disabled={isGetButtonDisabled}
        onClick={getIssues}
        type="submit"
        size="large"
      >
        Load Issues
      </Button>
      <Button
        color="secondary"
        variant="contained"
        className="reset-btn"
        onClick={onReset}
        size="large"
      >
        Reset
      </Button>
    </div>
  </div>
);

export default SearchContainer;
