import React from 'react';
import './Menu.scss';

const Menu = props => {
  const { ...rest } = props;

  return (
    <div className="menu" {...rest}>
      Menu
    </div>
  );
};

export default Menu;