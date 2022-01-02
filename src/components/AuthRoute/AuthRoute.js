import React from 'react';

const AuthRoute = props => {
  const { ...rest } = props;

  const sampleStyle = {
    fontSize: "3rem",
  };

  return (
    <div>
      <i className="fa-solid fa-lock" style={sampleStyle} />
    </div>
  );
};

export default AuthRoute;