import React from 'react';
import ToggleGroup from './ToggleGroup';

const Languages = ({ onToggleChange, languages }) => {
  return (
    <div>
      <h3>Languages:</h3>
      <ToggleGroup
        dataType="language"
        items={languages}
        names={Object.keys(languages)}
        onToggleChange={onToggleChange}
      />
    </div>
  );
};

export default Languages;
