import React from "react";
import { iconValid } from 'helpers/validators';
import './Notification.scss';

const defaultIcon = "fa-solid fa-info-circle";

const Notification = props => {
  const { message, icon, noIcon, close, index, className, ...rest } = props;
  const useIcon = noIcon ? "noIcon" : "";

  return (
    <div
      className={`notification ${useIcon} ${className || ""}`}
      {...rest}
    >
      {!noIcon && (
        <div className="icon">
          <i className={iconValid(icon) || defaultIcon} />
        </div>
      )}

      <div className="message">
        {message}
      </div>

      <div className="close" onClick={() => close(index)}>
        <i className="fa-solid fa-times" />
      </div>
    </div>
  );
};

export default Notification;