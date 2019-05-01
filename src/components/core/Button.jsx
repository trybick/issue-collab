import React from 'react';
import classNames from 'classnames';

const Button = props => {
  const { btnType, children, className, onClick } = props;
  const combinedClasses = classNames('btn', className);

  return (
    <button className={combinedClasses} onClick={onClick} type={btnType}>
      {children}
    </button>
  );
};

export default Button;
