import React from 'react';
import classNames from 'classnames';

const Button = ({ classNameWrapper, typeName, children, className, onClick }) => {
  const btnClasses = classNames('btn', className);
  const wrapperClasses = classNames('btn-wrapper', classNameWrapper);
  console.log('wrapperClasses:', wrapperClasses)

  return (
    <div className={wrapperClasses}>
      {/* type prop not regonized correctly https://github.com/yannickcr/eslint-plugin-react/issues/1555 */}
      {/* eslint-disable-next-line react/button-has-type */}
      <button className={btnClasses} onClick={onClick} type={typeName}>
        {children}
      </button>
    </div>
  );
};

export default Button;
