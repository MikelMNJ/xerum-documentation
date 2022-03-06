import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { iconValid, hexValid } from 'helpers/validators';
import { addEvent, removeEvent, resetPage, buildClasses } from 'helpers/utilityHelpers';
import './ToTop.scss';

const eName = "scroll";

const ToTop = props => {
  const { icon, bgColor, iconColor, className, fixed, ...rest } = props;
  const toTop = useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const classes = [
    { condition: className, name: className },
  ];

  const scrollAction = () => {
    const target = toTop.current;

    if (target) {
      const { style } = target;

      if (window.pageYOffset >= 145 || fixed) {
        style.setProperty('opacity', 1);
        style.setProperty('transform', 'translateY(0)');
      }

      if (window.pageYOffset < 145 && !fixed) {
        style.setProperty('opacity', 0);
        style.setProperty('transform', 'translateY(4.25rem)');
      }
    }
  };

  useEffect(() => {
    addEvent(eName, scrollAction);
    return () => removeEvent(eName, scrollAction);
  }, []);

  return (
    <div
      {...rest}
      ref={toTop}
      className={buildClasses(classes, "toTop")}
      onClick={() => resetPage(navigate, pathname)}
      style={{ ...rest.style, backgroundColor: hexValid(bgColor) }}
    >
      <i
        style={{ color: hexValid(iconColor) }}
        className={iconValid(icon) || "fa-solid fa-angle-up"}
      />
    </div>
  );
};

export default ToTop;