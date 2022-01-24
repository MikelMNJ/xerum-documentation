/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { stringToArray, lowercaseArray } from 'helpers/utilityHelpers';
import { iconValid } from 'helpers/validators';
import { isEmpty } from 'lodash';
import colors from 'theme/colors.scss';
import './Filter.scss';

const Filter = props => {
  const {
    data,
    include,
    callback,
    placeholder,
    icon,
    noIcon,
    className,
    ...rest
  } = props;

  const [ filterValue, setFilterValue ] = useState("");

  useEffect(() => {
    if (data) {
      const allDataFromLocations = include.map(location => {
        if (location.includes('.')) {
          const keyPath = location.split('.');
          let value = { ...data[keyPath[0]] };

          // Gets final value from nested keys.
          for (let i = 0; i < keyPath.length; i++) {
            if (i !== 0) value = value[keyPath[i]];
          };

          return value;
        }

        return data[location];
      });

      const userValues = lowercaseArray(stringToArray(filterValue)
        .filter((item, index) => {
          // If user hasn't typed in field yet, return all results
          // Otherwise filter out empty space while typing so results
          //  aren't defaulting to everything every time no include is found.
          if (index === 0 && item === "") return " ";
          return item;
        })
      );

      const combinedDataToFilter = [...new Set(lowercaseArray([].concat(...allDataFromLocations)))];
      const filteredResults = combinedDataToFilter.filter(item => {
        for (let i = 0; i < userValues.length; i++) {
          const workingItem = typeof item === "number"
            ? item.toString()
            : item;

          if (workingItem.includes(userValues[i])) {
            return item;
          }
        }
      });

      if (callback) {
        callback(filteredResults);
      };
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
          onChange={e => setFilterValue(e.currentTarget.value)}
          {...rest}
        />
      </label>
    </div>
  );
}

export default Filter;