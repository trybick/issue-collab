/* eslint-disable react/button-has-type */
// type prop not recogonized correctly: https://github.com/yannickcr/eslint-plugin-react/issues/1555
import React from 'react';
import '../../styles/Button.scss';

const Button = ({ children, className, classNameWrapper, disabled, forForm, onClick, type }) => {
  const wrapperClasses = classNameWrapper ? `btn-wrapper ${classNameWrapper}` : 'btn-wrapper';
  const classes = className ? `btn ${className}` : 'btn';

  return classNameWrapper ? (
    <div className={wrapperClasses}>
      <button className={classes} onClick={onClick} type={type} form={forForm} disabled={disabled}>
        {children}
      </button>
    </div>
  ) : (
    <button className={classes} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
