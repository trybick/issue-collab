import React from "react";
import "../../style.scss";
import Button from "../core/Button.js";

const LanguageToggles = ({ onToggle }) => {
  return (
    <div className="toggle-buttons">
      <Button name="python" onClick={onToggle} text="Python" />
      <Button name="java" onClick={onToggle} toggled={false} text="Java" />
    </div>
  );
};

export default LanguageToggles;
