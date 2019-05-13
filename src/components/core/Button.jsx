/* eslint-disable react/button-has-type */
// type prop not recogonized correctly: https://github.com/yannickcr/eslint-plugin-react/issues/1555
import React from 'react';
import '../../styles/Button.scss';

const Button = ({ children, className, classNameWrapper, forForm, onClick, type }) => {
  return classNameWrapper ? (
    <div className={`btn-wrapper ${classNameWrapper}`}>
      <button className={`btn ${className}`} onClick={onClick} type={type} form={forForm}>
        {children}
      </button>
    </div>
  ) : (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
