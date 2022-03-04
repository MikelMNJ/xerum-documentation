import React from 'react';
import { iconValid } from 'helpers/validators';
import './Social.scss';

const Social = props => {
  const { networks, className, noText, column, ...rest } = props;

  const buildSocial = () => {
    return networks?.map((network, index) => (
      <a
        key={index}
        href={network.path || "" }
        target="_blank"
        className={column || ""}
        {...rest}
      >
        <i className={iconValid(network.icon)
          ? network.icon
          : "fa-solid fa-question-circle"
        } />&nbsp;
        {(!noText && network.name) && network.name}
      </a>
    ));
  };

  const buildClasses = () => {
    let classList = "social";
    if (className) classList += ` ${className}`;
    return classList;
  }

  return (
    <div className={buildClasses()}>
      {buildSocial()}
    </div>
  );
};

export default Social;