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

  const getValues = (objPath, array) => {
    const firstKey = objPath[0];
    let value = { ...data[firstKey] };

    const digDeep = () => {
      // Gets final value from nested keys.
      for (let i = 0; i < objPath.length; i++) {
        if (i !== 0) value = value[objPath[i]];
      };
    };

    if (array) {
      return array.map(obj => {
        value = { ...obj[firstKey] };
        digDeep();
        return value;
      });
    }

    digDeep();
    return value;
  };

  useEffect(() => {
    if (data) {
      const allDataFromLocations = include.map(location => {
        if (location.includes('>')) {
          // Array of objects...
          const arrObjPath = location.split('>');
          const prePath = arrObjPath[0];
          const postPath = arrObjPath[1];
          const objPath = postPath.split('.');
          let workingArr = data[prePath];

          if (prePath.includes('.')) {
            const preSplit = prePath.split('.');
            workingArr = getValues(preSplit);
          }

          return getValues(objPath, workingArr);
        } else if (location.includes('.')) {
          // Regular objects...
          const objPath = location.split('.');
          return getValues(objPath);
        }

        // Plain strings or numbers.
        return data[location];
      });

      const userValues = lowercaseArray(stringToArray(filterValue)
        .filter((item, index) => {
          if (index === 0 && item === "") return " ";
          return item;
        })
      );

      const combinedDataToFilter = [...new Set([].concat(...allDataFromLocations))];

      const filteredResults = combinedDataToFilter.filter(item => {
        for (let i = 0; i < userValues.length; i++) {
          const isObject = typeof item === "object";
          const workingItem = typeof item === "number" ? item.toString() : item;

          if (!isObject && workingItem?.toLowerCase().includes(userValues[i])) {
            return item;
          }
        }
      });

      if (callback) callback(filteredResults);
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