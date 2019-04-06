import React from 'react';
import classNames from "classnames";

class Button extends React.Component {

  render() {
    const { activeLabels, text, name, onClick } = this.props;
    console.log('activeLabels:', activeLabels)

    let isToggled = false;

    if (!activeLabels === undefined) {
      if (activeLabels.includes(name)) { isToggled = true }
    } 

    const btnClass = classNames({
      btn: true,
      "btn-pressed": isToggled,
    });

    return (
      <button
        className={btnClass}
        name={name}
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    )
  }
};

export default Button;