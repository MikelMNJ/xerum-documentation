import React from 'react';
import './Brand.scss';

const Brand = props => {
  const { ...rest } = props;

  return (
    <div {...rest}>
      Brand
    </div>
  );
};

export default Brand;