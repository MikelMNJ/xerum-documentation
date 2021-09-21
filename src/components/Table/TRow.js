import React from 'react';
import './Table.scss';

const TRow = props => {
  const {
    children,
    draggable,
    dragStart,
    dragDuring,
    dragEnd,
    ...rest
  } = props;

  return (
    <li {...rest}>
      {children}
    </li>
  );
};

export default TRow;