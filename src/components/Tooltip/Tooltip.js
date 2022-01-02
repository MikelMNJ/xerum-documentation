import React, { useEffect, useState, useRef } from 'react';
import { iconValid } from 'helpers/validators';
import { addEvent, removeEvent } from 'helpers/utilityHelpers';
import colors from 'theme/colors.scss';
import './Tooltip.scss';

const eName = "mousemove";
const defaultBG = "rgba(32, 35, 42, 0.9)";

const Tooltip = props => {
  const {
    icon,
    text,
    position,
    children,
    className,
    ...rest
  } = props;

  const [ showTip, setShowTip ] = useState(false);
  const [ coords, setCoords ] = useState(null);
  const tipRef = useRef();

  const updatePos = e => {
    const x = e.clientX;
    const y = e.clientY;

    if (showTip) {
      setCoords({ x, y });
    }
  };

  useEffect(() => {
    showTip ? addEvent(eName, updatePos) : removeEvent(eName, updatePos);
    return () => removeEvent(eName, updatePos);
  }, [showTip]);

  const tipStyle = () => {
    const target = tipRef.current;

    if (target && coords) {
      const width = target.clientWidth;
      const height = target.clientHeight;
      const offset = 12;

      switch(position) {
        case "top":
          return {
            top: coords.y - height - offset,
            left: coords.x - (width / 2),
          };

        case "right":
          return {
            top: coords.y - (height / 2),
            left: coords.x + offset,
          };

        case "bottom":
          return {
            top: coords.y + offset,
            left: coords.x - (width / 2),
          };

        case "left":
          return {
            top: coords.y - (height / 2),
            left: coords.x - width - offset,
          };

        default:
          return {
            top: coords.y + offset,
            left: coords.x + offset,
          };
      };
    }
  };

  const buildClasses = () => {
    let classList = "tooltip";
    if (className) classList += ` ${className}`;
    return classList;
  };

  const renderTip = () => {
    if (showTip) {
      return (
        <div ref={tipRef} className="tip" style={tipStyle()}>
          {text || children || "Missing tip text."}
        </div>
      )
    };
  };

  return (
    <div
      className={buildClasses()}
      onMouseOver={() => setShowTip(true)}
      onMouseOut={() => setShowTip(false)}
      {...rest}
    >
      <i className={iconValid(icon) || "fa-solid fa-info-circle"} />
      {renderTip()}
    </div>
  );
};

export default Tooltip;