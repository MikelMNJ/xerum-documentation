/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { stringToArray } from 'helpers/utilityHelpers';
import { iconValid } from 'helpers/validators';
import colors from 'theme/colors.scss';
import './Filter.scss';

const Filter = props => {
  const {
    data,
    match,
    callback,
    placeholder,
    reset,
    icon,
    noIcon,
    className,
    ...rest
  } = props;

  const [ filterValue, setFilterValue ] = useState('');

  const matchVal = item => {
    const keyVals = match.map(value => {
      if (value.includes('.')) {
        const keyPath = value.split('.');
        return keyPath.reduce((o, i) => o[i], item).toLowerCase();
      } else if (item[value]) {
        return item[value].toLowerCase();
      }
    });

    return keyVals;
  };

  useEffect(() => {
    if (data) {
      const asArray = stringToArray(filterValue);
      const filterResults = data.filter(item => {
        const keyVals = matchVal(item);

        console.log(keyVals);

        for (let i = 0; i < asArray.length; i++) {
          for (let n = 0; n < keyVals.length; n++) {
            if (keyVals[n].includes(asArray[i].toLowerCase())) {
              return item;
            };
          }
        }

        return null;
      });

      if (callback) {
        callback(filterResults.length !== data.length ? filterResults : []);
      }
    };
  }, [filterValue]);

  const buildClasses = () => {
    let classList = "";

    if (className) classList += ` ${className}`;
    if (noIcon) classList += " noIcon";

    return classList;
  };

  return (
    <div className="filter">
      {!noIcon && (
        <i className={iconValid(icon) || "fa-solid fa-filter"} />
      )}

      <label>
        <input
          type="text"
          name="userFilter"
          className={buildClasses()}
          placeholder={placeholder || "Filter"}
          value={reset ? '' : filterValue}
          onChange={e => setFilterValue(e.currentTarget.value)}
          {...rest}
        />
      </label>
    </div>
  );
}

export default Filter;

// Create a hook to receive the newly filtered array.
// const [ filteredData, setFilteredData ] = useState([]);

// Add this component:
// <Filter
//  data={[
//    {info: {name: 'John Doe'}, address: {street: '123 foo st'}},
//    {info: {name: 'Jane Doe'}, address: {street: '456 bar st'}}
//  ]}
//  placeholder="Your placeholder"
//  reset={filteredData === null}
//  match={["info.name", "address.street"]}
//  callback={newData => setFilteredData(newData)} />

// Example filter input: "John", "John, 123" and "123" etc. returns first obj only.
// Example filter input: "Doe", "123, 456 bar st", "jane, 123 foo st" etc. returns both entries.
// Example filter input: "456", "Jane", "Jane, 456" etc. returns second only.

// Notes: data should be an array of objects.
// match should be an array of key name(s) who's value(s) you want to query against from data.
// Dot notation can be used in match to target nested data keys.
// If no matches are found, the default data will be returned as a fallback.
// setFilteredData(null) in parent component hook to trigger field reset.