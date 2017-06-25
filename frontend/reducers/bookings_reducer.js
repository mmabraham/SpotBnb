import RECEIVE_SPOT from '../actions/spot_actions';

const bookingsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SPOT:
      return action.bookings;
    case RECEIVE_BOOKINGS:
      return action.bookings;
    default:
      return state;
  }
}

export default bookingsReducer;
