import React, { Fragment } from 'react';
import { formatNum, truncate } from 'helpers/utilityHelpers';
import './Price.scss';

const Price = props => {
  const { value, symbol, currency, limit, ...rest } = props;

  const buildPrice = () => {
    const val = truncate(value, limit);
    const price = (
      <Fragment>
        {symbol || "$"} {val} {currency}
      </Fragment>
    );

    return price;
  };

  return (
    <div {...rest}>
      {buildPrice()}
    </div>
  );
};

export default Price;