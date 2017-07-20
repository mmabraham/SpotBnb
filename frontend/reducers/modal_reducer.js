import { DISPLAY_MODAL } from '../actions/modal_actions';
import { RECEIVE_USER } from '../actions/session_actions';

const sessionReducer = (state = '', action) => {
  switch (action.type) {
    case DISPLAY_MODAL:
      return action.modal
    case RECEIVE_USER:
      return '';
    default:
      return state;
  }
};

export default sessionReducer;
