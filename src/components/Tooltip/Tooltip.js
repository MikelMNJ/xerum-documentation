import React, { useState, useRef, useEffect } from 'react';
import { iconValid } from 'helpers/validators';
import { buildClasses } from 'helpers/utilityHelpers';
import './Tooltip.scss';

const offset = 12;

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
  const [ tipStyle, setTipStyle ] = useState({});

  const tipRef = useRef();

  const classes = [
    { condition: className, name: className },
  ];

  useEffect(() => {
    if (coords) setTipStyle(getStyle());
    /* eslint-disable-next-line */
  }, [coords]);

  const updatePos = e => {
    const x = e.clientX;
    const y = e.clientY;
    setCoords({ x, y });
  };

  const getStyle = () => {
    const target = tipRef.current;

    if (target && coords) {
      const width = target.clientWidth;
      const height = target.clientHeight;

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

  const renderTip = () => {
    if (showTip && coords) {
      return (
        <div ref={tipRef} className="tip" style={tipStyle}>
          {text || children || "Missing tip text."}
        </div>
      )
    };
  };

  return (
    <div
      className={buildClasses(classes, "tooltip")}
      onMouseOut={e => setShowTip(false)}
      onMouseMove={e => updatePos(e)}
      onMouseOver={e => {
        updatePos(e);
        setShowTip(true);
      }}
      {...rest}
    >
      <i className={iconValid(icon) || "fa-solid fa-info-circle"} />
      {renderTip()}
    </div>
  );
};

export default Tooltip;