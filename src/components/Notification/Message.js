import React, { forwardRef } from "react";
import { iconValid } from 'helpers/validators';
import { dismiss, slideIn } from 'helpers/animationHelpers';
import { isObject, isArray } from 'lodash';
import './Notification.scss';

const defaultIcon = "fa-solid fa-info-circle";
const defaultSuccess = "fa-solid fa-circle-check";
const defaultWarning = "fa-solid fa-triangle-exclamation";
const defaultError = "fa-solid fa-circle-exclamation";

const Message = forwardRef((props, ref) => {
  const { message, icon, noIcon, className, args, ...rest } = props;
  const useIcon = noIcon ? "noIcon" : "";

  const buildClasses = () => {
    let classList = `notification ${slideIn}`;
    if (className) classList += ` ${className}`;
    if (useIcon) classList += ` ${useIcon}`;
    if (message.type === "success") classList += " success";
    if (message.type === "warning") classList += " warning";
    if (message.type === "error") classList += " error";
    return classList;
  };

  const buildMessage = () => {
    if (isObject(message) && !isArray(message)) {
      return message.message || message.msg;
    }

    return message;
  };

  const getDefaultIcon = () => {
    if (message.type) {
      const { type } = message;
      if (type === "success") return defaultSuccess;
      if (type === "warning") return defaultWarning;
      if (type === "error") return defaultError;
    }

    return defaultIcon;
  };

  return (
    <div ref={ref} className={buildClasses()} {...rest}>
      {!noIcon && (
        <div className="icon">
          <i className={iconValid(icon) || getDefaultIcon()} />
        </div>
      )}

      <div className="message">
        {buildMessage()}
      </div>

      <div className="close" onClick={() => dismiss(args)}>
        <i className="fa-solid fa-times" />
      </div>
    </div>
  );
});

export default Message;