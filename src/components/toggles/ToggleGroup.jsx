import React from 'react';
import Toggle from 'react-toggle';
import { formatLabelForName } from '../../utils/formatting';
import '../../styles/react-toggle.scss';

const ToggleGroup = ({ dataType, items, onToggleChange, names }) => {
  const mappedToggles = names.map(name => {
    return (
      <div className="toggle-item" key={name}>
        <Toggle
          data-type={dataType}
          checked={items[name]}
          icons={false}
          name={name}
          onChange={onToggleChange}
        />
        <span className="toggle-label">{formatLabelForName(name)}</span>
      </div>
    );
  });

  return mappedToggles;
};

export default ToggleGroup;
