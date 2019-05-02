import React from 'react';
import Toggle from 'react-toggle';

const LanguageToggles = props => {
  const { dataType, defaultChecked, handleToggleChange, names } = props;
  const mappedToggles = names.map(name => {
    return (
      <div key={name}>
        <Toggle
          data-type={dataType}
          defaultChecked={defaultChecked[name]}
          icons={false}
          name={name}
          onChange={handleToggleChange}
        />
        <span>{name}</span>
      </div>
    );
  });

  return mappedToggles;
};

export default LanguageToggles;
