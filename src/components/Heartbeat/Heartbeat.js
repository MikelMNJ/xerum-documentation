import React, { Fragment, useState, useEffect } from 'react';
import { iconValid } from 'helpers/validators';
import axios from 'axios';

const Heartbeat = props => {
  const { time, icon, text, disabled, children, className, ...rest } = props;
  const [ offline, setOffline ] = useState(false);

  useEffect(() => {
    const heartbeat = setInterval(async () => {
      if (!disabled) {
        try {
          const res = await axios.get('https://icanhazip.com');
          const data = await res.data;

          if (offline) setOffline(false);

          return data;
        } catch (e) {
          if (!offline) setOffline(true);
        }
      }
    }, time || 10000);

    return () => clearInterval(heartbeat);
  }, [offline]);

  const buildClasses = () => {
    let classList = "flatline";
    if (className) classList += ` ${className}`;
    return classList;
  };

  const offlineContent = () => {
    return (
      <div className={buildClasses()} {...rest}>
        <i className={iconValid(icon) || "fa-solid fa-ethernet"} />
        <p>{text || "No connection detected."}</p>
      </div>
    );
  };

  return (
    <Fragment>
      {offline ? offlineContent() : children}
    </Fragment>
  );
};

export default Heartbeat;