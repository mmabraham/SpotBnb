import { REGISTER_MAP_CONTROL, SET_MAP_CENTER, CLEAR_MAP_CENTER } from '../actions/map_actions';

const mapsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_MAP_CENTER:
      return Object.assign({state, place: action.place});
    case CLEAR_MAP_CENTER:
      return Object.assign({state, place: null});
    default:
      return state;
  }
};

export default mapsReducer;
