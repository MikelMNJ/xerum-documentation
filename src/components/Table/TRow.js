import React from 'react';
import './Table.scss';

const TRow = props => {
  const {
    children,
    draggable,
    dragStart,
    dragDuring,
    dragEnd,
    callback,
    ...rest
  } = props;

  const rowStyle = {
    cursor: callback && "pointer",
  }

  const handleClick = e => {
    if (callback) callback();
  }

  return (
    <li onClick={handleClick} style={rowStyle} {...rest}>
      {children}
    </li>
  );
};

export default TRow;