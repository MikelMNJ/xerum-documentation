import React from 'react';
import './Card.scss';

const Card = props => {
  const { rest } = props;

  return (
    <div {...rest}>
      Card
    </div>
  );
};

export default Card;