import React from 'react';
import classNames from 'classnames';

const Button = props => {
  const { typeName, children, className, onClick } = props;
  const combinedClasses = classNames('btn', className);

  return (
    // typeName prop not regonized correctly
    // https://github.com/yannickcr/eslint-plugin-react/issues/1555
    // eslint-disable-next-line react/button-has-type
    <button className={combinedClasses} onClick={onClick} type={typeName}>
      {children}
    </button>
  );
};

export default Button;
