import React, { Fragment } from 'react';
import { hexValid } from 'helpers/validators';
import colors from 'theme/colors.scss';
import './ProgressBar.scss';

const ProgressBar = props => {
  const { color, bgColor, progress, styles } = props;

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

  return (
    <Fragment>
      <div className="progressBar" style={barStyle}>
        <div className="progress" style={progressStyle}></div>
      </div>
    </Fragment>
  );
};

export default ProgressBar;