import React from 'react';
import { buildClasses } from 'helpers/utilityHelpers';
import { iconValid } from 'helpers/validators';
import './Label.scss';

const Footer = props => {
  const {
    text,
    color,
    bgColor,
    useClose,
    closeIcon,
    callback,
    className,
    children,
    ...rest
  } = props;

  const classes = [
    { condition: className, name: className },
  ];

  const labelStyle = {
    color,
    backgroundColor: bgColor,
    ...rest.style
  };

  const handleClose = () => {
    if (callback) callback();
  };

  return (
    <div
      className={buildClasses(classes, "label")}
      style={labelStyle}
      {...rest}
    >
      {text || children}

      {useClose && (
        <i
          className={`${iconValid(closeIcon || "fa-solid fa-circle-xmark")} labelClose`}
          onClick={handleClose} />
      )}
    </div>
  );
};

export default Footer;