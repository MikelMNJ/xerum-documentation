import React, { Fragment } from 'react';
import { buildClasses } from 'helpers/utilityHelpers';
import './Badge.scss';

const Badge = props => {
  const { count, square, wide, className, ...rest } = props;

  const classes = [
    { condition: className, name: className },
    { condition: square, name: "square" },
  ];

  const renderCount = () => {
    if (count && count > 0) {
      return (
        <div className={buildClasses(classes, "badge")} {...rest}>
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