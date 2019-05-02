import React from 'react';
import ToggleGroup from './ToggleGroup';

const LabelToggles = props => {
  const { isChecked, handleToggleChange } = props;
  const names = ['bug', 'easy', 'documentation', 'help wanted'];
  return [
    <h3 key="title">Labels:</h3>,
    <ToggleGroup
      dataType="label"
      defaultChecked={isChecked}
      key="group"
      handleToggleChange={handleToggleChange}
      names={names}
    />,
  ];
};

export default LabelToggles;
