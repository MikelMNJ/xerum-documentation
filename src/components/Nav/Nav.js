import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { iconValid } from 'helpers/validators';
import { isEmpty, isEqual } from "lodash";
import './Nav.scss';

const Nav = props => {
  const { links, expand } = props;
  const [ activeMenus, setActiveMenus ] = useState([]);
  const location = useLocation();

  const handleClick = (e, hasSubMenu, isSubMenu, name) => {
    const index = activeMenus.findIndex(item => item === name);
    if (hasSubMenu && !isSubMenu) e.preventDefault();

    if (index === -1) {
      setActiveMenus([ ...activeMenus, name ]);
    } else {
      const workingArr = [ ...activeMenus ];
      workingArr.splice(index, 1);
      setActiveMenus(workingArr);
    }
  };

  const buildClasses = (path, isSubMenu, subMenu, menuActive) => {
    let classList = "";
    const isActive = location.hash === path;

    if (isActive) classList += " active";
    isSubMenu ? classList += " subMenuItem" : classList += " topLevel";

    if (subMenu) {
      menuActive ? classList += " open" : classList += " closed";
    } else {
      classList += " noSubMenu";
    }

    return classList;
  };

  const buildNav = (links, isSubMenu) => {
    if (links) {
      return links.map(link => {
        const { name, path, icon, subMenu } = link;
        const menuOpen = expand || activeMenus.find(item => item === name);

        return (
          <div key={name} className={buildClasses(path, isSubMenu, subMenu)}>
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
    <div id="nav">
      {buildNav(links)}
    </div>
  );
};

export default Nav;