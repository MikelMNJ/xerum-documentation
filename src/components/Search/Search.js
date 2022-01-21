import React, { cloneElement, useState } from 'react';
import { iconValid } from 'helpers/validators';
import Button from 'components/Button/Button';
import './Search.scss';

const Search = props => {
  const {
    callback,
    placeholder,
    icon,
    btnText,
    noIcon,
    className,
    btnClassName,
    ...rest
  } = props;

  const [ inputVal, setInputVal ] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (callback && inputVal !== "") {
      callback(inputVal);
      setInputVal("");
    }
  };

  const buildClasses = () => {
    let classList = "";

    if (className) classList += ` ${className}`;
    if (noIcon) classList += " noIcon";

    return classList;
  };

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit}>
        <label>
        {!noIcon && (
          <i className={iconValid(icon) || "fa-solid fa-magnifying-glass"} />
        )}

          <input
            type="text"
            className={buildClasses()}
            placeholder={placeholder || "Search"}
            value={inputVal}
            onChange={e => setInputVal(e.currentTarget.value)}
            {...rest}
          />
        </label>

        {cloneElement(
          <Button type="submit" text={btnText || "Search"} />,
          btnClassName ? { className: btnClassName } : {}
        )}
      </form>
    </div>
  );
};

export default Search;