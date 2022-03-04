import React, { Fragment } from 'react';
import { iconValid } from 'helpers/validators';
import './Loading.scss';

const Loading = props => {
  const {
    isLoading,
    hasData,
    icon,
    failIcon,
    noIcon,
    children,
    className,
    text,
    failText,
    noText,
    ...rest
  } = props;

  const buildContent = () => {
    if (isLoading) {
      return (
        <Fragment>
          {!noIcon && (
            <Fragment>
              <i className={`${iconValid(icon) || "fa-solid fa-spinner"} fa-spin`} /> &nbsp;
            </Fragment>
          )}

          {!noText && (text || "Loading...")}
        </Fragment>
      );
    } else if (!isLoading && !hasData) {
      return (
        <Fragment>
          {!noIcon && (
            <Fragment>
              <i className={iconValid(failIcon) || "fa-solid fa-exclamation-circle"} /> &nbsp;
            </Fragment>
          )}

          {!noText && (failText || "Load fail.")}
        </Fragment>
      );
    }

    return children;
  };

  return (
    <div className={`loader ${className || ""}`} {...rest}>
      <p>
        {buildContent()}
      </p>
    </div>
  );
};

export default Loading;