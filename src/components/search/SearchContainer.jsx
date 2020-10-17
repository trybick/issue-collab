import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './SearchContainer.scss';

const SearchContainer = ({
  handleTextChange,
  textToSearch,
  isGetButtonDisabled,
  getIssues,
  onReset,
}) => {
  const listenForSubmit = e => {
    if (e.key === 'Enter') {
      getIssues();
    }
  };

  return (
    <div className="search-container">
      <div className="search-container-input">
        <TextField
          margin="dense"
          placeholder="Enter keywords (optional)"
          className="search-container-input-field"
          type="text"
          variant="outlined"
          value={textToSearch}
          onKeyPress={e => listenForSubmit(e)}
          onChange={handleTextChange}
          InputProps={{
            style: {
              fontSize: '14px',
              height: '32px',
            },
          }}
        />
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
          Find Issues
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
};

export default SearchContainer;
