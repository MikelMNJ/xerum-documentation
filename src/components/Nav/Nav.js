import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { iconValid } from 'helpers/validators';
import { buildClasses } from 'helpers/utilityHelpers';
import './Nav.scss';

const Nav = props => {
  const { links, expand, ...rest } = props;
  const [ activeMenus, setActiveMenus ] = useState([]);
  const location = useLocation();

  const handleClick = (e, hasSubMenu, isSubMenu, name) => {
    const index = activeMenus.findIndex(item => item === name);
    const workingArr = [ ...activeMenus ];

    if (hasSubMenu && !isSubMenu) e.preventDefault();

    if (index === -1) {
      return setActiveMenus([ ...activeMenus, name ]);
    }

    workingArr.splice(index, 1);
    setActiveMenus(workingArr);
  };

  const buildNav = (links, isSubMenu) => {
    if (links) {
      return links.map(link => {
        const { name, path, icon, subMenu } = link;
        const menuOpen = expand || activeMenus.find(item => item === name);
        const isActive = path && (location.hash === path);
        const classes = [
          { condition: isActive, name: "active" },
          { condition: isSubMenu, name: "subMenuItem" },
          { condition: !isSubMenu, name: "topLevel" },
          { condition: subMenu, name: menuOpen ? "open" : "closed" },
          { condition: !subMenu, name: "noSubMenu" },
        ];

        return (
          <div key={name} className={buildClasses(classes)}>
            <a href={path} onClick={e => handleClick(e, subMenu, isSubMenu, name)}>
              {iconValid(icon) && <i className={icon} />}&nbsp;
              {name}
            </a>

            {menuOpen && buildNav(subMenu, true)}
          </div>
        );
      });
    }
  };

  return (
    <div id="nav" {...rest}>
      {buildNav(links)}
    </div>
  );
};

export default Nav;