import React, { Fragment } from 'react';
import { iconValid } from 'helpers/validators';
import { buildClasses } from 'helpers/utilityHelpers';
import Tooltip from 'components/Tooltip/Tooltip';
import './Social.scss';

const Social = props => {
  const { networks, className, noText, column, asTooltip, tipPosition, ...rest } = props;

  const classes = [
    { condition: className, name: className },
  ];

  const buildSocial = () => {
    return networks?.map((network, index) => {
      if (asTooltip) {
        return (
          <Fragment key={index}>
            <a
              key={index}
              href={network.path || "" }
              target="_blank"
              rel="noreferrer"
              className={column ? "column" : ""}
              {...rest}
            >
              <Tooltip
                text={network.name}
                position={tipPosition}
                icon={iconValid(network.icon)
                  ? network.icon
                  : "fa-solid fa-question-circle"}
              />
            </a>
          </Fragment>
        );
      }

      return (
        <a
          key={index}
          href={network.path || "" }
          target="_blank"
          rel="noreferrer"
          className={column ? "column" : ""}
          {...rest}
        >
          <i className={iconValid(network.icon)
            ? network.icon
            : "fa-solid fa-question-circle"
          } />&nbsp;
          {(!noText && network.name) && network.name}
        </a>
      );
    });
  };

  return (
    <div className={buildClasses(classes, "social")}>
      {buildSocial()}
    </div>
  );
};

export default Social;