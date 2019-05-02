import React from 'react';
import ToggleGroup from './ToggleGroup';

const Labels = props => {
  const { itemList, handleToggleChange } = props;
  return [
    <h3 key="title">Labels:</h3>,
    <ToggleGroup
      dataType="label"
      itemList={itemList}
      key="group"
      handleToggleChange={handleToggleChange}
      names={Object.keys(itemList)}
    />,
  ];
};

export default Labels;
