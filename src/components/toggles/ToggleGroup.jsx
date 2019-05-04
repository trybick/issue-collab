import React from 'react';
import Toggle from 'react-toggle';
import { formatLabelForName } from '../../utils/formatting';

const ToggleGroup = props => {
  const { dataType, items, handleToggleChange, names } = props;
  const mappedToggles = names.map(name => {
    return (
      <div className="toggle" key={name}>
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
