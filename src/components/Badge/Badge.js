import React, { Fragment } from 'react';
import './Badge.scss';

const Badge = props => {
  const { count, square, wide, className, ...rest } = props;

  const buildClasses = () => {
    return `badge ${square ? "square" : ""} ${className || ""}`;
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