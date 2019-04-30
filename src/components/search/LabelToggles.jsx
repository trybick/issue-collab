import React from 'react';
import '../../style.scss';
import Button from '../core/Button';

const LabelToggles = ({ activeLabels, onToggle }) => {
  return (
    <div className="toggle-buttons">
      <Button activeLabels={activeLabels} name="javascript" onClick={onToggle} text="javascript" />
      <Button
        activeLabels={activeLabels}
        name="bug"
        onClick={onToggle}
        toggled={false}
        text="bug"
      />
      <Button
        activeLabels={activeLabels}
        name="good+first+issue"
        onClick={onToggle}
        toggled={false}
        text="good first issue"
      />
      <Button
        activeLabels={activeLabels}
        name="help+wanted"
        onClick={onToggle}
        toggled={false}
        text="help wanted"
      />
    </div>
  );
};

export default LabelToggles;
