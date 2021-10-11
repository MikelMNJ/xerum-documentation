import React from 'react';
import './Countdown.scss';

const Countdown = props => {
  const { ...rest } = props;

  return (
    <div className="countdown" {...rest} >
      00:00:00
    </div>
  );
};

export default Countdown;