import { merge } from 'lodash';
import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions';

const SpotsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      const newState = merge({}, state);
      newState.spots[action.spot.id] = action.spot;
      return newState;
    default:
      return state;
  }
};

export default SpotsReducer;
