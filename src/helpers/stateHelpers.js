import { useState } from 'react';
import { useStore } from '../../store';
import { isArray, isEmpty, isObject } from 'lodash';
import { objectTypeError, objectKeyError, targetError } from 'errors/stateErrors';
import appSelectors from 'modules/app/appSelectors';

export const actionCreator = (type, payload) => {
  return { type, payload };
};

export const useSelector = selector => {
  const { state } = useStore();
  if (selector) return selector(state);
};

export const filtered = name => {
  if (name) {
    const filterResults = useSelector(state => appSelectors.filterResults(state));
    const filtered = filterResults?.includes?.(name);
    return filtered;
  }

  return true;
};

export const useDispatch = () => {
  const { dispatch } = useStore();
  return dispatch;
};

export const makeInitialState = reducers => (
  Object.keys(reducers).reduce((prev, current) => ({
    ...prev,
    [current]: reducers[current]()
  }), {})
);

export const combineReducers = slices => (state, action) => (
  Object.keys(slices).reduce((prev, current) => ({
    ...prev,
    [current]: slices[current](prev[current], action),
  }), state)
);

class StateManager {
  constructor(initialState, action) {
    this.initialState = initialState;
    this.action = action;
  };

  get(stateKey) {
    const target = this.initialState[stateKey];
    return target;
  };

  add(stateKey) {
    const workingState = { ...this.initialState };
    let target = workingState[stateKey];
    const isArr = isArray(target);
    const isObj = isObject(target);
    const payload = this.action.payload

    if (payload || payload === "" || payload === null) {
      if (isArr) {
        const updatedArr = [ ...target, payload ];

        return {
          ...this.initialState,
          [stateKey]: updatedArr,
        };
      }

      if (isObj) {
        if (isObject(payload) && !isArray(payload)) {
          if (isEmpty(payload)) {
            console.warn("Empty object, state unchanged.");
            return { ...this.initialState };
          }

          return {
            ...this.initialState,
            [stateKey]: {
              ...this.initialState[stateKey],
              ...payload,
            }
          };
        }

        objectTypeError(payload, target);
        return { ...this.initialState };
      }

      return {
        ...this.initialState,
        [stateKey]: payload,
      };
    }

    return { ...this.initialState };
  };

  update(stateKey, stringOrIndex) {
    const workingState = { ...this.initialState };
    let target = workingState[stateKey];
    const isArr = isArray(target);
    const isObj = isObject(target);
    const payload = this.action.payload;
    const indexValid = stringOrIndex >= 0 && stringOrIndex <= target?.length;

    if (!target) {
      targetError('update');
      return this.add(stateKey, stringOrIndex);
    }

    if (payload || payload === "" || payload === null) {
      if (isArr && indexValid) {
        const index = stringOrIndex;
        const updatedArr = target.map((item, i) => {
          if (i === index) return payload;
          return item;
        });

        return {
          ...this.initialState,
          [stateKey]: updatedArr,
        };
      }

      if (isObj) {
        const key = stringOrIndex;
        const validKey = typeof stringOrIndex === "string" && target[key];

        if (validKey) {
          return {
            ...this.initialState,
            [stateKey]: {
              ...this.initialState[stateKey],
              [key]: payload
            }
          };
        }

        if (!key) {
          return {
            ...this.initialState,
            [stateKey]: payload
          };
        }

        objectKeyError(isArr, key, target);
      }
    }

    return { ...this.initialState };
  };

  remove(stateKey, stringOrIndex) {
    const workingState = { ...this.initialState };
    let target = workingState[stateKey];
    const isArr = isArray(target);
    const isObj = isObject(target);
    const indexValid = stringOrIndex >= 0 && stringOrIndex <= target?.length;

    if (!target) targetError('remove');

    if (isArr && indexValid) {
      const index = stringOrIndex;
      const updatedArr = target.filter((item, i) => i !== index);

      return {
        ...this.initialState,
        [stateKey]: updatedArr,
      };
    }

    if (isObj) {
      const key = stringOrIndex;
      const validKey = typeof stringOrIndex === "string" && target[key];

      if (validKey) {
        const { [key]: value, ...rest } = target;

        return {
          ...this.initialState,
          [stateKey]: { ...rest },
        };
      }

      if (!key) {
        const { [stateKey]: value, ...rest } = this.initialState;
        return { ...rest };
      }

      objectKeyError(isArr, key, target);
    }

    return { ...this.initialState };
  };
};

export default StateManager;