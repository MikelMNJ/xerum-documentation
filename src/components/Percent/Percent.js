import React, { Fragment } from 'react';
import { truncate } from 'helpers/utilityHelpers';
import './Percent.scss';

const Percent = props => {
  const { current, total, limit, usePlus, ...rest } = props;

  const buildPercent = () => {
    const is = +(current);
    const of = +(total);
    const val = isNaN(is/of) ? truncate(0, limit) : truncate(is/of * 100, limit);
    const final = usePlus
      ? `${(is/of * 100) >=0 ? "+" : ""}${val}`
      : val;

    return final;
  };

  return (
    <div ref={rest.ref} {...rest}>
      {buildPercent()} %
    </div>
  );
};

export default Percent;