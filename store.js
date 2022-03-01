import React, { createContext, useContext, useReducer, useMemo } from 'react';
import { combineReducers } from 'helpers/stateHelpers';
import app from 'modules/app/appReducer';

export const AppContext = createContext();
AppContext.displayName = "AppContext";

export const useStore = () => useContext(AppContext);

const reducers = {
  app,
};

const initialState = Object.keys(reducers).reduce((prev, current) => ({
  ...prev,
  [current]: reducers[current]()
}), {});

export const AppProvider = ({ children }) => {
  // How to use: wrap App in index.js with <AppProvider />
  // See 'modules' for reducer and associated state actions/selectors.
  // See 'helpers/stateHelpers' for custom hooks, action creator and StateManager methods.

  const rootReducer = combineReducers(reducers);
  const [ state, dispatch ] = useReducer(rootReducer, initialState);
  const memoized = useMemo(() => [ state, dispatch ], [state]);
  const store = { state: memoized[0], dispatch: memoized[1] };

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
};