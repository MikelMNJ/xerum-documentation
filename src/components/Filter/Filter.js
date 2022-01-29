/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { stringToArray, lowercaseArray } from 'helpers/utilityHelpers';
import { iconValid } from 'helpers/validators';
import { every, isArray, isObject } from 'lodash';
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

  const digDeep = (path, value) => {
    let workingVal = value;

    // Gets final value from nested keys.
    for (let i = 1; i < path.length; i++) {
      const currentPath = path[i];
      const currentData = workingVal[currentPath];

      if (currentData) {
        workingVal = currentData;
      }
    };

    return workingVal;
  };

  const getValues = objPath => {
    const firstKey = objPath[0];
    const originalVal = { ...data[firstKey] };
    const finalArr = digDeep(objPath, originalVal);
    const isComplex = every(finalArr, isObject);

    if (isComplex && isArray(finalArr)) {
      // From array of objects...
      const simplifiedArr = finalArr?.map(obj => {
        const subPath = objPath.slice(1);
        return digDeep(subPath, obj);
      });

      return simplifiedArr;
    }

    // From simple object...
    return finalArr || [];
  };

  useEffect(() => {
    if (data) {
      const allDataFromLocations = include.map(location => {
        if (location.includes('.')) {
          // Objects...
          const objPath = location.split('.');
          return getValues(objPath);
        }

        // Plain strings, numbers or arrays.
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