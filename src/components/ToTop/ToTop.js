import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { iconValid } from 'helpers/validators';
import { addEvent, removeEvent } from 'helpers/utilityHelpers';
import './ToTop.scss';

const eName = "scroll";

const ToTop = props => {
  const { icon, circle, sharp, className, ...rest } = props;
  const toTop = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollAction = () => {
    const target = toTop.current;

    if (target) {
      const { style } = target;

      if (window.pageYOffset >= 145) {
        style.setProperty('opacity', 0.5);
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

  const resetPage = () => {
    navigate(pathname);
    window.scrollTo(0, 0);
  };

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
      onClick={resetPage}
      {...rest}
    >
      <i className={iconValid(icon) || "fa-solid fa-angle-up"} />
    </div>
  );
};

export default ToTop;