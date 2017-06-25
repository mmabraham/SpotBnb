import { merge } from 'lodash';
import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';

const SpotsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      const newState = merge({}, state);
      newState[action.spot.id] = action.spot;
      return newState;
    case RECEIVE_BOOKINGS:
      return action.spots;
    default:
      return state;
  }
};

export default SpotsReducer;
