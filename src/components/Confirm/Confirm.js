import React, { Fragment, useRef } from 'react';
import { dismiss, slideIn, fadeIn } from 'helpers/animationHelpers';
import { hexValid } from 'helpers/validators';
import { buildClasses } from 'helpers/utilityHelpers';
import Button from 'components/Button/Button';
import './Confirm.scss';

const Confirm = props => {
  const {
    title,
    bgClose,
    message,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
    className,
    titleColor,
    ...rest
  } = props;

  const titleStyle = { color: hexValid(titleColor) };
  const ref = useRef();
  const bgRef = useRef();
  const args = { onClose: onCancel, targets: [ ref, bgRef ], time: 200 };
  const classes = [
    { condition: className, name: className },
  ];

  return (
    <Fragment>
      <div
        ref={bgRef}
        className={`confirmBG ${fadeIn}`}
        onClick={() => {
          if (bgClose) dismiss(args);
        }}
      />

      <div ref={ref} className={buildClasses(classes, `confirmContainer ${slideIn}`)} {...rest}>
        <div className="messageContainer">
          {title && (
            <h3 className="title" style={titleStyle}>
              {title}
            </h3>
          )}

          {message && (
            <div className="message">
              {message}
            </div>
          )}
        </div>

        <div className="buttons">
          <div className="confirm">
            <Button
              text={confirmText || "Okay"}
              btnType="solid"
              callback={() => {
                if (onConfirm) onConfirm();
                dismiss(args);
              }}
            />
          </div>

          <div className="cancel">
            <Button
              text={cancelText || "Cancel"}
              btnType="solid"
              callback={() => dismiss(args)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Confirm;