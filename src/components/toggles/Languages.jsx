import React from 'react';
import ToggleGroup from './ToggleGroup';

const Languages = ({ onToggleChange, languages }) => {
  return (
    <div className='languages-container'>
      <h3>Languages:</h3>
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
