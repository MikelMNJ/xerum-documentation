import constants from './appConstants';

/*
* How to use: In component, import and declare variable from state.
* import { useSelector } from 'helpers/stateHelpers';
* import appSelectors from 'modules/app/appSelectors';
*
* const sample = useSelector(state => appSelectors.sampleSelector(state));
*/

const appSelectors = {
  filterResults: state => state.app[constants.STATE_KEY_FILTER_RESULTS],
};

export default appSelectors;