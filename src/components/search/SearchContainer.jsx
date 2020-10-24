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
          className="search-container-input-field"
          // eslint-disable-next-line react/jsx-sort-props
          InputProps={{
            style: {
              fontSize: '14px',
              height: '40px',
            },
          }}
          margin="dense"
          onChange={handleTextChange}
          onKeyPress={e => listenForSubmit(e)}
          placeholder="Enter keywords (optional)"
          type="text"
          value={textToSearch}
          variant="outlined"
        />
      </div>
      <div className="button-group">
        <Button
          className="get-btn"
          color="primary"
          disabled={isGetButtonDisabled}
          onClick={getIssues}
          size="large"
          type="submit"
          variant="contained"
        >
          Search
        </Button>
        <Button
          className="reset-btn"
          color="secondary"
          onClick={onReset}
          size="large"
          variant="contained"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default SearchContainer;
