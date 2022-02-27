import React, { Fragment } from 'react';
import { truncate } from 'helpers/utilityHelpers';
import { hexValid } from 'helpers/validators';
import './Price.scss';

const Price = props => {
  const {
    value,
    symbol,
    currency,
    limit,
    positiveColor,
    negativeColor,
    className,
    ...rest
  } = props;

  const style = () => {
    const positive = value >= 0;
    const style = hexValid(negativeColor) && !positive ? { color: negativeColor } : {};

    if (hexValid(positiveColor) && positive) {
      return { color: positiveColor };
    }

    return style;
  };

  const buildPrice = () => {
    const val = isNaN(value) ? truncate(0, limit) : truncate(value, limit);
    const price = (
      <Fragment>
        {symbol || "$"} {val} {currency}
      </Fragment>
    );

    return price;
  };

  return (
    <div style={style()} {...rest}>
      {buildPrice()}
    </div>
  );
};

export default Price;