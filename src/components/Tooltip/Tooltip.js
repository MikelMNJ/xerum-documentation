import React from 'react';
import './Tooltip.scss';

const Tooltip = props => {
  const { ...rest } = props;

  return (
    <div {...rest}>
      Tooltip
    </div>
  );
};

export default Tooltip;