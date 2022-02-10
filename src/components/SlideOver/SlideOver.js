import React from 'react';
import './SlideOver.scss';

const SlideOver = props => {
  const { rest } = props;

  return (
    <div {...rest}>
      Slide-Over
    </div>
  );
};

export default SlideOver;