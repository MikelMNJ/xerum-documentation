import React, { Fragment, useEffect } from 'react';
import { aggTime } from 'helpers/timeHelpers';
import './AggTimer.scss';

const AggTimer = props => {
  const {
    timeframe,
    aggregate,
    local,
    details,
    callback,
    vague,
    compact,
    ...rest
  } = props;

  useEffect(() => {
    // TODO: addEventListener() to renderTime() every second.
    return () => {
      // TODO: removeEventListener();
    }
  }, []);

  const renderTime = () => {
    const { remaining, details } = aggTime(props);

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
    <div className="aggTimer" {...rest} >
      {renderTime()}
    </div>
  );
};

export default AggTimer;