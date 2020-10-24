import React from 'react';
import ToggleGroup from './ToggleGroup';

const Labels = ({ onToggleChange, labels }) => {
  return (
    <div>
      <h3>Labels:</h3>
      <ToggleGroup
        dataType="label"
        items={labels}
        names={Object.keys(labels)}
        onToggleChange={onToggleChange}
      />
    </div>
  );
};

export default Labels;
