import session from './session_reducer';
import modal from './modal_reducer';
import spots from './spots_reducer';
import filters from './filters_reducer';
import errors from './errors_reducer';
import users from './users_reducer';
import reviews from './reviews_reducer';
import reviewToggleState from './review_toggle_reducer';
import bookings from './bookings_reducer';
import maps from './map_reducer';


import { combineReducers } from 'redux';

export default combineReducers({
  session,
  spots,
  filters,
  errors,
  users,
  reviews,
  reviewToggleState,
  bookings,
  maps,
  modal,
});
