import React from 'react';
import classNames from "classnames";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
  }

  render() {
    const { activeLabels, text, name, onClick } = this.props;
    const { isToggled } = this.state;

    console.log('activeLabels:', activeLabels)


    if (activeLabels === undefined) {
    } else if (activeLabels.includes(name)) {
        this.setState({ isToggled: true });
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