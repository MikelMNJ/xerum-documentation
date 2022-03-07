import React from 'react';
import { buildClasses } from 'helpers/utilityHelpers';
import './FieldSlider.scss';

const FieldSlider = props => {
  const { className, ...rest } = props;

  const classes = [
    { condition: className, name: className },
  ];

  return (
    <div className={buildClasses(classes, "fieldSlider")} {...rest}>
      FieldSlider
    </div>
  );
};

export default FieldSlider;