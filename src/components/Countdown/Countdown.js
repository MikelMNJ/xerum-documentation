import React, { Fragment } from 'react';
import { counter } from 'helpers/timeHelpers';
import './Countdown.scss';

const Countdown = props => {
  const {
    timeframe,
    aggregate,
    local,
    end,
    details,
    callback,
    vague,
    compact,
    ...rest
  } = props;

  const renderTime = () => {
    const { remaining, details } = counter(props);

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