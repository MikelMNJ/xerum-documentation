import StateManager from 'helpers/stateHelpers';
import constants from './appConstants';

const reducer = (initialState = {}, action = {}) => {
  const state = new StateManager(initialState, action);

  switch(action.type) {
    case constants.SET_FILTER_RESULTS:
      const filterResults = constants.STATE_KEY_FILTER_RESULTS;
      return state.update(filterResults);

    default:
      return initialState;
  }
};

export default reducer;