import React from 'react';
import Toggle from 'react-toggle';

const LanguageToggles = props => {
  const { isChecked, handleToggleChange } = props;
  return (
    <div>
      <h3>Languages:</h3>
      <div>
        <Toggle
          data-type="language"
          defaultChecked={isChecked.python}
          icons={false}
          name="python"
          onChange={handleToggleChange}
        />
        <span>python</span>
      </div>
      <div>
        <Toggle
          data-type="language"
          defaultChecked={isChecked.javascript}
          icons={false}
          name="javascript"
          onChange={handleToggleChange}
        />
        <span>javascript</span>
      </div>
      <div>
        <Toggle
          data-type="language"
          defaultChecked={isChecked.php}
          icons={false}
          name="php"
          onChange={handleToggleChange}
        />
        <span>php</span>
      </div>
      <div>
        <Toggle
          data-type="language"
          defaultChecked={isChecked.java}
          icons={false}
          name="java"
          onChange={handleToggleChange}
        />
        <span>java</span>
      </div>
    </div>
  );
};

export default LanguageToggles;
