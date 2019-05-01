import React from 'react';
import classNames from 'classnames';

const Button = props => {
  const { text, name, onClick } = props;

  const btnClass = classNames({
    btn: true,
  });

  return (
    <button className={btnClass} name={name} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
