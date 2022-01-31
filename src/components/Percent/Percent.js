import React, { Fragment } from 'react';
import { formatNum } from 'helpers/utilityHelpers';
import './Percent.scss';

const Percent = props => {
  const { current, total, limit, ...rest } = props;

  const buildPercent = () => {
    const is = +(current);
    const of = +(total);

    return isNaN(is/of) ? formatNum(0, limit) : formatNum(is/of * 100, limit);
  };

  return (
    <div ref={rest.ref} {...rest}>
      {buildPercent()} %
    </div>
  );
};

export default Percent;