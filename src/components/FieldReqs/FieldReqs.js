import React, { Fragment } from 'react';
import { hexValid } from 'helpers/validators';
import colors from 'theme/colors.scss';
import './FieldReqs.scss';

const min = 8;

const FieldReqs = props => {
  const {
    value,
    upper,
    lower,
    number,
    min,
    special,
    excludes,
    color,
    bgColor
  } = props;

  const validColor = hexValid(color) ? color : colors.blue;
  const validBGColor = hexValid(bgColor) ? bgColor : colors.lightGrey;

  const loadIcon = type => {
    let valid = false;
    let style;

    if (type === 'num') /^(?=.*[0-9]).*$/.test(value) && (valid = !valid);
    if (type === 'length') value.length >= min && (valid = !valid);
    if (type === 'uppercase') /^(?=.*[A-Z]).*$/.test(value) && (valid = !valid);
    if (type === 'lowercase') /^(?=.*[a-z]).*$/.test(value) && (valid = !valid);
    if (type === 'special') /^(?=.*[@#$%^&+=!]).*$/.test(value) && (valid = !valid);

    style = {
      color: valid ? validColor : validBGColor,
    };

    return (
      <i className={`fa-solid fa-check-circle`} style={style} />
    );
  };

  const buildRequirements = () => {
    return (
      <Fragment>
        <li>{loadIcon('uppercase')} Uppercase</li>
        <li>{loadIcon('lowercase')} Lowercase</li>
        <li>{loadIcon('num')} Number</li>
        <li>{loadIcon('length')} {min} Minimum</li>
        <li>{loadIcon('special')} Special: @ # $ % ^ {'&'} + = !</li>
      </Fragment>
    );
  };

  return (
    <ul className="reqs">
      {buildRequirements()}
    </ul>
  )
}

export default FieldReqs;