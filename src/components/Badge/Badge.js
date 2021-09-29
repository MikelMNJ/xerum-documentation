import React, { Fragment } from 'react';
import './Badge.scss';

const Badge = props => {
  const { count, square, wide, className, ...rest } = props;

  const buildClasses = () => {
    let classList = "badge";

    if (className) classList += ` ${className}`;
    if (square) classList += " square";

    return classList;
  };

  const renderCount = () => {
    if (count && count > 0) {
      return (
        <div className={buildClasses()} {...rest}>
          {count.toLocaleString()}
        </div>
    )}
  };

  return (
    <Fragment>
      {renderCount()}
    </Fragment>
  );
};

export default Badge;