import React, { forwardRef } from "react";
import { iconValid } from 'helpers/validators';
import { dismiss, slideIn } from 'helpers/animationHelpers';
import './Notification.scss';

const defaultIcon = "fa-solid fa-info-circle";

const Message = forwardRef((props, ref) => {
  const { message, icon, noIcon, className, args, ...rest } = props;
  const useIcon = noIcon ? "noIcon" : "";

  const buildClasses = () => {
    let classList = `notification ${slideIn}`;
    if (className) classList += ` ${className}`;
    if (useIcon) classList += ` ${useIcon}`;
    return classList;
  };

  return (
    <div ref={ref} className={buildClasses()} {...rest}>
      {!noIcon && (
        <div className="icon">
          <i className={iconValid(icon) || defaultIcon} />
        </div>
      )}

      <div className="message">
        {message}
      </div>

      <div className="close" onClick={() => dismiss(args)}>
        <i className="fa-solid fa-times" />
      </div>
    </div>
  );
});

export default Message;