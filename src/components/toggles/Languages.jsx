import React from 'react';
import ToggleGroup from './ToggleGroup';

const Languages = props => {
  const { languages, handleToggleChange } = props;
  return (
    <div className="languages">
      <h3 key="title">Languages:</h3>
      <ToggleGroup
        dataType="language"
        items={languages}
        key="group"
        handleToggleChange={handleToggleChange}
        names={Object.keys(languages)}
      />
    </div>
  );
};

export default Languages;
