import React, { Fragment } from 'react';
import { counter } from 'helpers/timeHelpers';
import './Countdown.scss';

const Countdown = props => {
  const { timeframe, aggregate, local, end, details, callback, ...rest } = props;
  const args = { timeframe, aggregate, local, end, callback, details };

  const renderTime = () => {
    const { remaining, details } = counter(args);

    return (
      <Fragment>
        {remaining}

        {details && (
          <div className="details">
            {details}
          </div>
        )}
      </Fragment>
    );
  };

  return (
    <div className="countdown" {...rest} >
      {renderTime()}
    </div>
  );
};

export default Countdown;