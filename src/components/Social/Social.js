import React from 'react';
import { Link } from 'react-router-dom';
import { iconValid } from 'helpers/validators';
import './Social.scss';

const Social = props => {
  const { networks, className, noText, column, ...rest } = props;

  const buildClasses = () => {
    let classList = "";

    if (className) classList += ` ${className}`;
    if (column) classList += "column";

    return classList;
  };

  const buildSocial = () => {
    return networks?.map(network => (
      <Link
        to={{ pathname: network.path || "" }}
        target="_blank"
        className={buildClasses()}
        {...rest}
      >
        <i className={iconValid(network.icon)
          ? network.icon
          : "fas fa-question-circle"
        } />&nbsp;
        {(!noText && network.name) && network.name}
      </Link>
    ));
  };

  return (
    <div className="social">
      {buildSocial()}
    </div>
  );
};

export default Social;