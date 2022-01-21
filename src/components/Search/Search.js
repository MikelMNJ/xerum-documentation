import React, { useState } from 'react';
import { iconValid } from 'helpers/validators';
import Button from 'components/Button/Button';
import './Search.scss';

const Search = props => {
  const { callback, placeholder, icon, btnText, ...rest } = props;
  const [ inputVal, setInputVal ] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (callback && inputVal !== "") {
      callback(inputVal);
      setInputVal("");
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit} {...rest}>
        <label>
        <i className={iconValid(icon) || "fa-solid fa-magnifying-glass"} />

          <input
            type="text"
            placeholder={placeholder || "Search"}
            value={inputVal}
            onChange={e => setInputVal(e.currentTarget.value)}
          />
        </label>

        <Button type="submit" text={btnText || "Search"} />
      </form>
    </div>
  );
};

export default Search;