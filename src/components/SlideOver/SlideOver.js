import React, { useRef } from 'react';
import { iconValid, hexValid } from 'helpers/validators';
import Button from 'components/Button/Button';
import './SlideOver.scss';

const SlideOver = props => {
  const { title, titleColor, closeIcon, onClose, className, children, rest } = props;
  const titleStyle = { color: hexValid(titleColor) || "inherit" };
  const ref = useRef();

  const handleClose = () => {
    if (ref.current) {
      const classes = ref.current.classList;

      classes.remove("slideIn");
      classes.add("slideOut");

      setTimeout(() => {
        // Time matches animations in SlideOver.scss
        if (onClose) onClose();
      }, 350);
    }
  };

  const buildClasses = () => {
    let classList = "slideOver slideIn";
    if (className) classList += ` ${className}`;
    return classList;
  };

  return (
    <div ref={ref} className={buildClasses()} {...rest}>
      <div className="header">
        <h3 style={titleStyle}>{title}</h3>

        <Button
          className="closeBtn"
          icon={closeIcon || iconValid("fa-solid fa-arrow-right-long")}
          btnType="transparent"
          hoverStyle={titleStyle}
          callback={handleClose}
        />
      </div>

      {children}
    </div>
  );
};

export default SlideOver;