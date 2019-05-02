import React from 'react';
import Toggle from 'react-toggle';
import { formatLabel } from '../../utils/formatting';

const ToggleGroup = props => {
  const { dataType, itemList, handleToggleChange, names } = props;
  const mappedToggles = names.map(name => {
    return (
      <div className="toggle" key={name}>
        <Toggle
          data-type={dataType}
          checked={itemList[name]}
          icons={false}
          name={name}
          onChange={handleToggleChange}
        />
        <span>{formatLabel(name)}</span>
      </div>
    );
  });

  return mappedToggles;
};

export default ToggleGroup;
