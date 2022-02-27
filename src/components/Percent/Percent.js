import React from 'react';
import { truncate } from 'helpers/utilityHelpers';
import { hexValid } from 'helpers/validators';
import './Percent.scss';

const Percent = props => {
  const {
    current,
    total,
    limit,
    usePlus,
    positiveColor,
    negativeColor,
    className,
    ...rest
  } = props;

  const style = () => {
    const val = (+(current) / +(total) * 100);
    const positive = !isNaN(val) && val >= 0;
    const style = hexValid(negativeColor) && !positive ? { color: negativeColor } : {};

    if (hexValid(positiveColor) && positive) {
      return { color: positiveColor };
    }

    return style;
  };

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
    <div style={style()} {...rest}>
      {buildPercent()} %
    </div>
  );
};

export default Percent;