import React, { cloneElement, useState } from 'react';
import { iconValid } from 'helpers/validators';
import { buildClasses } from 'helpers/utilityHelpers';
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
    noButton,
    ...rest
  } = props;

  const [ inputVal, setInputVal ] = useState("");

  const classes = [
    { condition: className, name: className },
  ];

  const handleSubmit = e => {
    e.preventDefault();

    if (callback && inputVal !== "") {
      callback(inputVal);
      setInputVal("");
    }
  };

  return (
    <div className={buildClasses(classes, "searchContainer")}>
      <form
        onSubmit={handleSubmit}
        onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
      >
        <label className={noButton ? "noButton" : ""}>
        {!noIcon && (
          <i className={iconValid(icon) || "fa-solid fa-magnifying-glass"} />
        )}

          <input
            type="text"
            className={noIcon ? "noIcon" : ""}
            placeholder={placeholder || "Search"}
            value={inputVal}
            onChange={e => setInputVal(e.currentTarget.value)}
            {...rest}
          />
        </label>

        {!noButton && cloneElement(
          <Button type="submit" text={btnText || "Search"} />
        )}
      </form>
    </div>
  );
};

export default Search;