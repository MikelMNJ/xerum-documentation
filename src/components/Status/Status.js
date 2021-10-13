import React, { Fragment } from 'react';
import { hexValid } from 'helpers/validators';
import colors from 'theme/colors.scss';
import './Status.scss';

const Status = props => {
  const { color, text, className, ...rest } = props;

  const statusStyle = {
    color: hexValid(color) || colors.grey
  };

  const buildClasses = () => {
    let classList = "fas fa-circle";
    if (className) classList += ` ${className}`;
    return classList;
  };

  return (
    <div className="status">
      <i className={buildClasses()} style={statusStyle}  {...rest} />

      {text && (
        <Fragment>
          &nbsp;{text}
        </Fragment>
      )}
    </div>
  );
};

export default Status;