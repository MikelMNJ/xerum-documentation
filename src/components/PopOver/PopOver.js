import React from 'react';
import './PopOver.scss';

const PopOver = props => {
  const { ...rest } = props;

  return (
    <div {...rest}>
      Pop-Over
    </div>
  );
};

export default PopOver;