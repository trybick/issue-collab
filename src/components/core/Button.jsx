import React from 'react';
import classNames from 'classnames';

const Button = props => {
  const { children, className, onClick, text, type, name } = props;

  const combinedClasses = classNames('btn', className);

  return (
    <button className={combinedClasses} name={name} onClick={onClick} type="submit">
      {children}
    </button>
  );
};

export default Button;
