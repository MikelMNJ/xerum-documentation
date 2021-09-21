import React, { useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import { iconValid } from 'helpers/validators';
import { isEqual } from "lodash";
import './Nav.scss';

const Nav = props => {
  const { links, subClassName, ...rest } = props;
  const [ activeMenu, setActiveMenu ] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const changeRoute = (e, isSubMenu, subMenu) => {
    if (subMenu) {
      setActiveMenu(!isEqual(activeMenu, subMenu) ? subMenu : null);
    } else {
      if (!isSubMenu && activeMenu !== null) setActiveMenu(null);
    }
  };

  const configureClasses = (path, isSubMenu, subMenu) => {
    const isActive = (location.hash || location.path) === path;

    return `
      ${isActive ? "active" : ""}
      ${isSubMenu ? "subMenu" : "topLevel"}
      ${subMenu ? (isEqual(activeMenu, subMenu) ? "closed" : "open") : "noSubMenu"}
    `
  };

  const buildNav = (links, isSubMenu) => {
    const menu = [];

    for (const key in links) {
      const { name, path, icon, subMenu } = links[key];

      menu.push(
        <div key={name} className={configureClasses(path, isSubMenu, subMenu)}>
          <a href={path} onClick={e => changeRoute(e, isSubMenu, subMenu)}>
            {iconValid(icon) && <i className={icon} />}&nbsp;
            {name}
          </a>

          {isEqual(activeMenu, subMenu) && buildNav(subMenu, true)}
        </div>
      );
    };

    return menu;
  };

  return (
    <div id="nav">
      {buildNav(links)}
    </div>
  );
};

export default Nav;