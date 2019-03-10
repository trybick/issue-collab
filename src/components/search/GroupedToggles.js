import React from "react";
import "../../style.scss";
import Button from "../core/Button.js";

const GroupedToggles = ({ onToggle }) => {
  return (
    <div className="toggle-buttons">
      <Button name="javascript" onClick={onToggle} text="JavaScript" />
      <Button name="bug" onClick={onToggle} toggled={false} text="Bug" />
    </div>
  );
};

export default GroupedToggles;
