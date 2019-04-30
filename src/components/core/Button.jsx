/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {
  render() {
    const { activeLabels, text, name, onClick } = this.props;

    const btnClass = classNames({
      btn: true,
    });

    return (
      <button className={btnClass} name={name} type="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
