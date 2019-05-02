import React from 'react';
import ToggleGroup from './ToggleGroup';

const Languages = props => {
  const { languages, handleToggleChange } = props;
  return [
    <h3 key="title">Languages:</h3>,
    <ToggleGroup
      dataType="language"
      items={languages}
      key="group"
      handleToggleChange={handleToggleChange}
      names={Object.keys(languages)}
    />,
  ];
};

export default Languages;
