import React, { Fragment } from 'react';
import { hexValid } from 'helpers/validators';
import colors from 'theme/colors.scss';
import './Progress.scss';

const Progress = props => {
  const { color, bgColor, current, total, className, styles, ...rest } = props;

  const progress = +(current) / +(total) * 100;
  const validColor = hexValid(color) ? color : colors.blue;
  const validBGColor = hexValid(bgColor) ? bgColor : colors.slate;
  const barStyle = {
    backgroundColor: validBGColor,
    ...styles,
  };

  const progressStyle = {
    ...styles,
    width: `calc(100% * ${progress / 100})`,
    backgroundColor: validColor,
  }

  const buildClasses = () => {
    let classList = "progressBar";

    if (className) classList += ` ${className}`;

    return classList;
  };

  return (
    <Fragment>
      <div className={buildClasses()} style={barStyle} {...rest}>
        <div className="progress" style={progressStyle} />
      </div>
    </Fragment>
  );
};

export default Progress;