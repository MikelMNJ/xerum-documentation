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
  }

  add(stateKey) {
    const workingState = { ...this.initialState };
    let target = workingState[stateKey];
    const isArr = isArray(target);
    const isObj = isObject(target);
    const payload = this.action.payload

    if (payload || payload === "" || payload === null) {
      if (isArr) {
        const updatedArr = [ ...target ];

        updatedArr.push(payload);
        workingState[stateKey] = updatedArr;

        return workingState;
      }

      if (isObj) {
        if (isObject(payload) && !isArray(payload)) {
          const updatedObj = { ...workingState[stateKey], ...payload };
          workingState[stateKey] = updatedObj;
          if (isEmpty(payload)) console.warn("Empty object, state unchanged.")
          return workingState;
        }

        return objectTypeError(payload, target);
      }

      workingState[stateKey] = payload;
      return workingState;
    }
  };

  update(stateKey, stringOrIndex) {
    const workingState = { ...this.initialState };
    let target = workingState[stateKey];
    const isArr = isArray(target);
    const isObj = isObject(target);
    const payload = this.action.payload;
    const indexValid = stringOrIndex >= 0 && stringOrIndex <= target?.length;

    if (!target) return targetError('update');

    if (payload || payload === "" || payload === null) {
      if (isArr && indexValid) {
        const index = stringOrIndex;
        const updatedArr = [ ...target ];

        updatedArr.splice(index, 1, payload);
        workingState[stateKey] = updatedArr;

        return workingState;
      }

      if (isObj) {
        const key = stringOrIndex;
        const validKey = typeof stringOrIndex === "string" && target[key];

        if (validKey) {
          target[key] = payload;
          return workingState;
        }

        if (!key) {
          workingState[stateKey] = payload;
          return workingState;
        }

        return objectKeyError(isArr, key, target);
      }
    }
  };

  remove(stateKey, stringOrIndex) {
    const workingState = { ...this.initialState };
    let target = workingState[stateKey];
    const isArr = isArray(target);
    const isObj = isObject(target);
    const indexValid = stringOrIndex >= 0 && stringOrIndex <= target?.length;

    if (!target) return targetError('remove');

    if (isArr && indexValid) {
      const index = stringOrIndex;
      const updatedArr = [ ...target ];

      updatedArr.splice(index, 1);
      workingState[stateKey] = updatedArr;
      console.log(workingState);

      return workingState;
    }

    if (isObj) {
      const key = stringOrIndex;
      const validKey = typeof stringOrIndex === "string" && target[key];

      if (validKey) {
        delete target[key];
        console.log(workingState);
        return workingState;
      }

      if (!key) {
        delete workingState[stateKey];
        console.log(workingState)
        return workingState;
      }

      return objectKeyError(isArr, key, target);
    }
  };
};

export default StateManager;