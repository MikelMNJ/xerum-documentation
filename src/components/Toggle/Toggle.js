import React from 'react';
import { buildClasses } from 'helpers/utilityHelpers';
import './Toggle.scss';

const Toggle = props => {
  const { className, ...rest } = props;

  const classes = [
    { condition: className, name: className },
  ];

  return (
    <div className={buildClasses(classes, "toggle")} {...rest}>
      Toggle
    </div>
  );
};

export default Toggle;