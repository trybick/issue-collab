import React from 'react';
import classNames from 'classnames';

const Button = ({ typeName, children, className, onClick }) => {
  const combinedClasses = classNames('btn', className);

  return (
    <div className="button">
      {/* type prop not regonized correctly https://github.com/yannickcr/eslint-plugin-react/issues/1555 */}
      {/* eslint-disable-next-line react/button-has-type */}
      <button className={combinedClasses} onClick={onClick} type={typeName}>
        {children}
      </button>
    </div>
  );
};

export default Button;
