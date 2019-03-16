import React from "react";
import "../../style.scss";
import Button from "../core/Button.js";

const LabelToggles = ({ onToggle }) => {
  return (
    <div className="toggle-buttons">
      <Button name="javascript" onClick={onToggle} text="javascript" />
      <Button name="bug" onClick={onToggle} toggled={false} text="bug" />
      <Button
        name="good+first+issue"
        onClick={onToggle}
        toggled={false}
        text="good first issue"
      />
      <Button
        name="help wanted"
        onClick={onToggle}
        toggled={false}
        text="help wanted"
      />
    </div>
  );
};

export default LabelToggles;
