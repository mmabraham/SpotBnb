import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const _defaultState = Object.freeze({
    user: null,
    errors: []
  }
);

const sessionReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, { user: action.user });
    case RECEIVE_ERRORS:
      return Object.assign({}, _defaultState, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
