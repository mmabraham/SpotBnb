import { RECEIVE_SPOT } from '../actions/spot_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';
import { merge } from 'lodash';


const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SPOT:
      // const newState = merge({}, state);
      // newState.users[action.user.id] = action.user;
      // return newState;

      // I think this should over-write any existing users
      // as they are no longer relevant
      return { [action.host.id]: action.host };
    case RECEIVE_BOOKINGS:
      return action.hosts;
    default:
      return state;
  }
};

export default usersReducer;
