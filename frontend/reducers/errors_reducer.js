import { RECEIVE_ERRORS, RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_SPOTS, RECIEVE_SPOT } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
    return action.errors;
    case RECEIVE_USER:
    case RECIEVE_SPOT:
    case RECEIVE_SPOTS:
      return {};
    default:
      return state;
  }
};

export default sessionReducer;
