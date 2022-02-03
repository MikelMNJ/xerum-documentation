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
    columnStyle,
    ...rest
  } = props;

  const style = {
    cursor: callback && "pointer",
  }

  const handleClick = e => {
    if (callback) callback();
  }

  return (
    <li
      onClick={handleClick}
      style={{ ...style, ...columnStyle }}
      {...rest}
    >
      {children}
    </li>
  );
};

export default TRow;