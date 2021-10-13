import React from 'react';

const Heartbeat = props => {
  const { disabled } = props;

  const heartbeatSample = {
    fontSize: "3rem"
  };

  return (
    <div>
      <i className="fas fa-heartbeat" style={heartbeatSample} />
    </div>
  );
};

export default Heartbeat;