import React from 'react';
import { counter } from 'helpers/timeHelpers';
import './Countdown.scss';

const Countdown = props => {
  const { timeframe, aggregate, local, end, ...rest } = props;
  const args = { timeframe, aggregate, local, end };

  return (
    <div className="countdown" {...rest} >
      {counter(args)}
    </div>
  );
};

export default Countdown;