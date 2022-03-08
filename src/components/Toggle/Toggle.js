import React, { useState } from 'react';
import { buildClasses } from 'helpers/utilityHelpers';
import { iconValid, hexValid } from 'helpers/validators';
import './Toggle.scss';

const Toggle = props => {
  const { icon, iconColor, inactiveColor, activeColor, callback, className, ...rest } = props;
  const [ isChecked, setIsChecked ] = useState(rest.checked || false);

  const classes = [
    { condition: className, name: className },
  ];

  const iconStyle = { color: hexValid(iconColor) };
  const trackStyle = {
    backgroundColor: isChecked ? hexValid(activeColor) : hexValid(inactiveColor)
  };

  const handleChange = e => {
    const newVal = e.currentTarget.checked;
    if (callback) callback(newVal);
    setIsChecked(!isChecked);
  };

  return (
    <label className={buildClasses(classes, "toggle")}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        {...rest}
      />

      <span className="toggleTrack" style={trackStyle}>
        <i
          style={iconStyle}
          className={iconValid(icon) || "fa-solid fa-circle"}
        />
      </span>
    </label>
  );
};

export default Toggle;