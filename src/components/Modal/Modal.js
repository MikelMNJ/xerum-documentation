import React, { Fragment, useRef } from 'react';
import { iconValid, hexValid } from 'helpers/validators';
import { dismiss, slideIn, fadeIn } from 'helpers/animations';
import Button from 'components/Button/Button';
import './Modal.scss';

const Modal = props => {
  const {
    title,
    titleColor,
    bgClose,
    closeIcon,
    onClose,
    className,
    children,
    rest
  } = props;

  const titleStyle = { color: hexValid(titleColor) };
  const ref = useRef();
  const bgRef = useRef();
  const args = { onClose, targets: [ ref, bgRef ], time: 200 };

  const buildClasses = () => {
    let classList = `modal ${slideIn}`;
    if (className) classList += ` ${className}`;
    return classList;
  };

  return (
    <Fragment>
      <div
        ref={bgRef}
        className={`modalBG ${fadeIn}`}
        onClick={() => {
          if (bgClose) dismiss(args);
        }}
      />

      <div ref={ref} className={buildClasses()} {...rest}>
        <div className="header">
          <h3 style={titleStyle}>{title}</h3>

          <Button
            className="closeBtn"
            icon={closeIcon || iconValid("fa-solid fa-xmark")}
            btnType="transparent"
            hoverStyle={titleStyle}
            callback={() => dismiss(args)}
          />
        </div>

        {children}
      </div>
    </Fragment>
  );
};

export default Modal;