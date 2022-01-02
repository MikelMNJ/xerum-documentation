import React from 'react';
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
    return networks?.map((network, index) => (
      <a
        key={index}
        href={network.path || "" }
        target="_blank"
        className={buildClasses()}
        {...rest}
      >
        <i className={iconValid(network.icon)
          ? network.icon
          : "fas fa-question-circle"
        } />&nbsp;
        {(!noText && network.name) && network.name}
      </a>
    ));
  };

  return (
    <div className="social">
      {buildSocial()}
    </div>
  );
};

export default Social;