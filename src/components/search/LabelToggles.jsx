import React from 'react';
import Toggle from 'react-toggle';

const LabelToggles = props => {
  const { isChecked, handleToggleChange } = props;
  return (
    <div>
      <h3>Labels:</h3>
      <div>
        <Toggle
          data-type="label"
          defaultChecked={isChecked.bug}
          icons={false}
          name="bug"
          onChange={handleToggleChange}
        />
        <span>bug</span>
      </div>
      <div>
        <Toggle
          data-type="label"
          defaultChecked={isChecked.easy}
          icons={false}
          name="easy"
          onChange={handleToggleChange}
        />
        <span>easy</span>
      </div>
      <div>
        <Toggle
          data-type="label"
          defaultChecked={isChecked.documentation}
          icons={false}
          name="documentation"
          onChange={handleToggleChange}
        />
        <span>documentation</span>
      </div>
      <div>
        <Toggle
          data-type="label"
          defaultChecked={isChecked.helpWanted}
          icons={false}
          name="help-wanted"
          onChange={handleToggleChange}
        />
        <span>help wanted</span>
      </div>
    </div>
  );
};

export default LabelToggles;
