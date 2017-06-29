import { TOGGLE } from '../actions/review_actions';

const ReviewToggleReducer = (state = 'off', action) => {
  switch (action.type) {
    case TOGGLE:
      return state === 'off' ? 'on' : 'off';
    default:
      return state
  }
}

export default ReviewToggleReducer;
