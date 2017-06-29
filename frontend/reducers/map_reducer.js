import { REGISTER_MAP_CONTROL, SET_MAP_CENTER } from '../actions/map_actions';

const mapsReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_MAP_CONTROL:
      return Object.assign({state, cb: action.callback});
    case SET_MAP_CENTER:
      return Object.assign({state, place: action.place});
    default:
      return state;
  }
};

export default mapsReducer;
