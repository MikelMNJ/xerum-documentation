import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { iconValid } from 'helpers/validators';
import { addEvent, removeEvent, resetPage } from 'helpers/utilityHelpers';
import './ToTop.scss';

const eName = "scroll";

const ToTop = props => {
  const { icon, circle, sharp, className, ...rest } = props;
  const toTop = useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollAction = () => {
    const target = toTop.current;

    if (target) {
      const { style } = target;

      if (window.pageYOffset >= 145) {
        style.setProperty('opacity', 1);
        style.setProperty('transform', 'translateY(0)');
      }

      if (window.pageYOffset < 145) {
        style.setProperty('opacity', 0);
        style.setProperty('transform', 'translateY(4.25rem)');
      }
    }
  };

  useEffect(() => {
    addEvent(eName, scrollAction);
    return () => removeEvent(eName, scrollAction);
  }, []);

  const buildClasses = () => {
    let classList = "toTop";
    if (className) classList += ` ${className}`;
    if (sharp) classList += " sharp";
    if (circle) classList += " circle";
    return classList;
  };

  return (
    <div
      ref={toTop}
      className={buildClasses()}
      onClick={() => resetPage(navigate, pathname)}
      {...rest}
    >
      <i className={iconValid(icon) || "fa-solid fa-angle-up"} />
    </div>
  );
};

export default ToTop;