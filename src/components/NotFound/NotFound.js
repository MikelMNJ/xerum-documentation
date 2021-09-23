import React, { Fragment } from 'react';
import { iconValid } from 'helpers/validators';
import './NotFound.scss';

const NotFound = props => {
  const {
    title,
    noTitle,
    icon,
    noIcon,
    message,
    noMessage,
    staticContext,
    ...rest
  } = props;

  const renderIcon = () => {
    if (!noIcon) {
      return (
        <div className="icon">
          <i className={`${icon ? iconValid(icon) : "fas fa-bug"}`} />
        </div>
      );
    }
  };

  const renderTitle = () => {
    if (!noTitle) {
      return (
        <h2>
          {title || "404: Hrmm..."}
        </h2>
      );
    }
  };

  const renderMessage = () => {
    if (!noMessage) {
      return (
        <p>
          {message || "Can't find that page."}
        </p>
      );
    }
  };

  return (
    <div id="notFound" {...rest}>
      {renderIcon()}
      {renderTitle()}
      {renderMessage()}
    </div>
  );
};

export default NotFound;