import React from 'react';
import Toggle from 'react-toggle';
import { formatLabelForName } from '../../utils/formatting';

const ToggleGroup = ({ dataType, items, handleToggleChange, names }) => {
  const mappedToggles = names.map(name => {
    return (
      <div className={`toggle-item toggle-${dataType}`} key={name}>
        <Toggle
          data-type={dataType}
          checked={items[name]}
          icons={false}
          name={name}
          onChange={handleToggleChange}
        />
        <span className="toggle-label">{formatLabelForName(name)}</span>
      </div>
    );
  });

  return mappedToggles;
};

export default ToggleGroup;
