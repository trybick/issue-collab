import React from 'react';
import ToggleGroup from './ToggleGroup';

const Labels = props => {
  const { itemList, handleToggleChange } = props;
  const names = ['bug', 'easy', 'documentation', 'helpWanted'];
  return [
    <h3 key="title">Labels:</h3>,
    <ToggleGroup
      dataType="label"
      itemList={itemList}
      key="group"
      handleToggleChange={handleToggleChange}
      names={names}
    />,
  ];
};

export default Labels;
