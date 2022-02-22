import React, { Fragment, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { iconValid } from 'helpers/validators';
import { isEmpty } from 'lodash';
import './Menu.scss';

const Menu = props => {
  const {
    links,
    openIcon,
    closeIcon,
    horizontal,
    className,
    ...rest
  } = props;

  const [ openMenus, setOpenMenus ] = useState([]);
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  const handleClick = (e, name, path, subMenu) => {
    if (!isEmpty(subMenu)) {
      const index = openMenus.indexOf(name);
      const workingMenus = [ ...openMenus ];

      e.preventDefault();
      if (index === -1) return setOpenMenus([ ...openMenus, name ]);
      workingMenus.splice(index, 1);
      setOpenMenus(workingMenus);
      return;
    }

    navigate(path);
  };

  const subMenuIcon = name => {
    const isOpen = openMenus.includes(name);
    const makeIcon = (icon, fallback) => (
      <i className={iconValid(icon) || `fa-solid fa-${fallback}`} />
    );

    return (
      !isOpen
        ? makeIcon(openIcon, "caret-right")
        : makeIcon(closeIcon, "caret-down")
    );
  };

  const buildClasses = () => {
    let classList = "menu";
    if (className) classList += ` ${className}`;
    if (horizontal) classList +=  " horizontal";
    return classList;
  };

  const buildTopLevelClasses = (isActive, isSubItem) => {
    let classList = "topLevel";
    if (horizontal) classList += " horizontal";
    if (isActive) classList += " active";
    if (isSubItem) classList += " subItem";
    return classList;
  };

  const buildMenu = (items, isSubItem) => {
    if (items) {
      return items?.map((item, index) => {
        const { name, path, icon, subMenu } = item;
        const isActive = path && (pathname.includes(path) || hash.includes(path));
        const isOpen = openMenus.find(openItem => openItem === name);

        return (
          <div key={index} style={{ paddingLeft: `${isSubItem ? 1.5 : 0}rem` }} {...rest}>
            <a
              href={path}
              className={buildTopLevelClasses(isActive, isSubItem)}
              onClick={e => handleClick(e, name, path, subMenu)}
            >
              {!isEmpty(subMenu) && (
                <span className="subMenuIcon">
                  {subMenuIcon(name)}
                </span>
              )}

              {iconValid(icon) && (
                <span className="icon">
                  <i className={icon} />
                </span>
              )}

              {name}
            </a>

            {isOpen && !isEmpty(subMenu) && (
              buildMenu(subMenu, true)
            )}
          </div>
        );
      });
    }
  };

  return (
    <div className={buildClasses()} {...rest}>
      {buildMenu(links)}
    </div>
  );
};

export default Menu;