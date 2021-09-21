import React, { useState } from "react";
import { iconValid, btnValid, urlValid } from 'helpers/validators';
import "./Button.scss";

const Button = props => {
  const {
    text,
    style,
    hoverStyle,
    callback,
    btnType,
    icon,
    url,
    ...rest
  } = props;

  const [ mouseOver, setMouseOver ] = useState(false);
  const myClass = btnValid(btnType) || "solid";

  const handleClick = e => {
    const validUrl = urlValid(url);

    if (validUrl) window.open(validUrl, rest.target || "_blank");
    if (callback) callback();
  };

  return (
    <button
      className={`${myClass} ${rest.className || ""}`}
      style={rest.disabled ? {} : (mouseOver ? hoverStyle : style)}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      onClick={handleClick}
      {...rest}
    >
      {iconValid(icon) && <i className={icon} />}&nbsp;
      {text && text}
    </button>
  );
};

export default Button;