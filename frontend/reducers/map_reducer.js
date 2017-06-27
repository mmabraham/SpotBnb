import { REGISTER_MAP_CONTROL } from '../actions.map_actions';

const mapsReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_MAP_CONTROL:
      return action.callback;
    default:
      return state;
  }
};

export default mapsReducer;
