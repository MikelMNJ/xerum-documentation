import React from 'react';
import { iconValid } from 'helpers/validators';
import './Banner.scss';

const Banner = props => {
  const {
    text,
    noIcon,
    icon,
    className,
    callback,
    center,
    sharp,
    children,
    ...rest
  } = props;

  const buildClasses = () => {
    let classList = "banner";

    if (className) classList += ` ${className}`;
    if (noIcon) classList += " noClose";
    if (sharp) classList += " sharp";

    return classList;
  };

  return (
    <div className={buildClasses()} {...rest}>
      <div className={`message ${center ? "center" : ""}`}>
        {text || children}
      </div>

      {!noIcon && (
        <div className="close">
          <i className={iconValid(icon) || "fas fa-times"} onClick={callback} />
        </div>
      )}
    </div>
  );
};

export default Banner;