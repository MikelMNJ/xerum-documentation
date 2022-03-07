import React from 'react';
import { buildClasses } from 'helpers/utilityHelpers';
import './Checkbox.scss';

const Checkbox = props => {
  const { className, ...rest } = props;

  const classes = [
    { condition: className, name: className },
  ];

  return (
    <div className={buildClasses(classes, "checkbox")} {...rest}>
      Checkbox
    </div>
  );
};

export default Checkbox;