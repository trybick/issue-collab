import React from 'react';
import ToggleGroup from './ToggleGroup';

const Languages = props => {
  const { itemList, handleToggleChange } = props;
  const names = ['python', 'javascript', 'c++', 'java'];
  return [
    <h3 key="title">Languages:</h3>,
    <ToggleGroup
      dataType="language"
      itemList={itemList}
      key="group"
      handleToggleChange={handleToggleChange}
      names={names}
    />,
  ];
};

export default Languages;
