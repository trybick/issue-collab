import React from 'react';
import ToggleGroup from './ToggleGroup';

const Languages = ({ onToggleChange, languages }) => {
  return (
    <div className="languages-group">
      <h3 className="group-title">Languages:</h3>
      <ToggleGroup
        dataType="language"
        items={languages}
        onToggleChange={onToggleChange}
        names={Object.keys(languages)}
      />
    </div>
  );
};

export default Languages;
