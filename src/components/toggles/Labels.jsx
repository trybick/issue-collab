import React from 'react';
import ToggleGroup from './ToggleGroup';

const Labels = ({ handleToggleChange, labels }) => {
  return (
    <div className="labels-group">
      <h3 className="group-title">Labels:</h3>
      <ToggleGroup
        dataType="label"
        items={labels}
        handleToggleChange={handleToggleChange}
        names={Object.keys(labels)}
      />
    </div>
  );
};

export default Labels;
