import session from './session_reducer';
import spots from './spots_reducer';
import filters from './filters_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session,
  spots,
  filters,
});
