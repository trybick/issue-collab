import React from 'react';
import Toggle from 'react-toggle';

const LanguageToggles = props => {
  const { dataType, defaultChecked, handleToggleChange, names } = props;
  const mappedToggles = names.map((name, i) => {
    const key1 = `key1${i}`;
    const key2 = `key2${i}`;
    return (
      <div>
        <Toggle
          data-type={dataType}
          defaultChecked={defaultChecked[name]}
          icons={false}
          key={key1}
          name={name}
          onChange={handleToggleChange}
        />
        <span key={key2}>{name}</span>
      </div>
    );
  });

  return mappedToggles;
};

export default LanguageToggles;
