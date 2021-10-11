import React from 'react';
import colors from 'theme/colors.scss';
import './Status.scss';

const Status = props => {
  const { color, className, ...rest } = props;

  const statusStyle = {
    color: color || colors.grey
  };

  const buildClasses = () => {
    let classList = "fas fa-circle";
    if (className) classList += ` ${className}`;
    return classList;
  };

  return (
    <div className="status">
      <i className={buildClasses()} style={statusStyle}  {...rest} />
    </div>
  );
};

export default Status;