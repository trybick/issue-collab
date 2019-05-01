import React from 'react';
import Toggle from 'react-toggle';

const LabelToggles = props => {
  const { isChecked, handleToggleChange } = props;
  return (
    <div>
      <div>
        <Toggle
          defaultChecked={isChecked.bug}
          icons={false}
          name="bug"
          onChange={handleToggleChange}
        />
        <span>bug</span>
      </div>
      {/* <div>
        <Toggle
          defaultChecked={toggledLabels.easy}
          icons={false}
          name="easy"
          onChange={this.handleToggleChange}
        />
        <span>easy</span>
      </div>
      <div>
        <Toggle
          defaultChecked={toggledLabels.documentation}
          icons={false}
          name="documentation"
          onChange={this.handleToggleChange}
        />
        <span>documentation</span>
      </div>
      <div>
        <Toggle
          defaultChecked={toggledLabels.helpWanted}
          icons={false}
          name="help-wanted"
          onChange={this.handleToggleChange}
        />
        <span>help-wanted</span>
      </div> */}
    </div>
  );
};

export default LabelToggles;
