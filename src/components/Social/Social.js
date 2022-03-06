import React from 'react';
import { iconValid } from 'helpers/validators';
import { buildClasses } from 'helpers/utilityHelpers';
import './Social.scss';

const Social = props => {
  const { networks, className, noText, column, ...rest } = props;

  const classes = [
    { condition: className, name: className },
  ];

  const buildSocial = () => {
    return networks?.map((network, index) => (
      <a
        key={index}
        href={network.path || "" }
        target="_blank"
        className={column ? "column" : ""}
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

  return (
    <div className={buildClasses(classes, "social")}>
      {buildSocial()}
    </div>
  );
};

export default Social;