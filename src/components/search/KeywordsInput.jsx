import React from 'react';
import TextField from '@material-ui/core/TextField';

const KeywordsInput = ({ handleTextChange, textToSearch }) => (
  <form id="issues-form">
    <TextField
      margin="dense"
      placeholder="Keywords (optional)"
      type="text"
      variant="outlined"
      value={textToSearch}
      onChange={handleTextChange}
    />
  </form>
);

export default KeywordsInput;
