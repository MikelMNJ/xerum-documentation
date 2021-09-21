import React, { useEffect, useRef } from 'react';
import './ToTop.scss';

const ToTop = props => {
  const toTop = useRef();

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
    window.addEventListener('scroll', scrollAction);
    return () => window.removeEventListener('scroll', scrollAction);
  }, []);

  return (
    <div
      ref={toTop}
      className="toTop"
      onClick={() => window.scrollTo(0, 0)}>
        <i className="fas fa-angle-up" />
    </div>
  );
};

export default ToTop;