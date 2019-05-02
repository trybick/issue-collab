import React from 'react';
import ToggleGroup from './ToggleGroup';

const Labels = props => {
  const { labels, handleToggleChange } = props;
  return [
    <h3 key="title">Labels:</h3>,
    <ToggleGroup
      dataType="label"
      items={labels}
      key="group"
      handleToggleChange={handleToggleChange}
      names={Object.keys(labels)}
    />,
  ];
};

export default Labels;
