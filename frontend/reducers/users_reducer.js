import { RECIEVE_SPOT } from '../actions/spot_actions';
import { merge } from 'lodash';


const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_SPOT:
      const newState = merge({}, state);
      newState.users[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
}

export default usersReducer;
