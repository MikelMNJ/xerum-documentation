import React, { useRef } from 'react';
import { iconValid, hexValid } from 'helpers/validators';
import { dismiss, slideIn } from 'helpers/animations';
import Button from 'components/Button/Button';
import './SlideOver.scss';

const SlideOver = props => {
  const { title, titleColor, closeIcon, onClose, className, children, rest } = props;
  const titleStyle = { color: hexValid(titleColor) };
  const ref = useRef();
  const args = { onClose, targets: [ ref ] };

  const buildClasses = () => {
    let classList = `slideOver ${slideIn}`;
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
          callback={() => dismiss(args)}
        />
      </div>

      {children}
    </div>
  );
};

export default SlideOver;