import React from 'react';
import './Table.scss';

const TRow = props => {
  const { children, callback, columnStyle, provided, ...rest } = props;

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
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      {...rest}
    >
      {children}
    </li>
  );
};

export default TRow;