import React from 'react';
import { iconValid } from 'helpers/validators';
import './Banner.scss';

const Banner = props => {
  const {
    text,
    noClose,
    closeIcon,
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
    if (noClose) classList += " noClose";
    if (sharp) classList += " sharp";

    return classList;
  };

  return (
    <div className={buildClasses()} {...rest}>
      <div className={`message ${center ? "center" : ""}`}>
        {text || children}
      </div>

      {!noClose && (
        <div className="close">
          <i className={iconValid(closeIcon) || "fa-solid fa-times"} onClick={callback} />
        </div>
      )}
    </div>
  );
};

export default Banner;