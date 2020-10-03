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
          placeholder="Keywords (optional)"
          type="text"
          variant="outlined"
          value={textToSearch}
          onKeyPress={e => listenForSubmit(e)}
          onChange={handleTextChange}
          className='textField'
          InputProps={{
            style: {
              fontSize: '1.5em',
              height: '2.3em',
              padding:'0.7em',
              textAlign: 'center',
              boxShadow: 'inset 0.15em 0.15em 0.3em' ,
              borderRadius: '0.3em',
              justifyContent: 'center'
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
