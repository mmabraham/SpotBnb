import { RECEIVE_SPOT } from '../actions/spot_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';


const bookingsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SPOT:
      return action.bookings || state;
    case RECEIVE_BOOKINGS:
      return action.bookings;
    default:
      return state;
  }
};

export default bookingsReducer;
