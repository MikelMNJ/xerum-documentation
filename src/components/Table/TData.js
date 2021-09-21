import React from 'react';
import './Table.scss';

const TData = props => {
  const { children, ...rest } = props;

  return (
    <div {...rest}>
      {children}
    </div>
  );
};

export default TData;