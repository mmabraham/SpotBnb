import { RECIEVE_REVIEWS } from '../actions/review_actions';

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};

export default reviewsReducer;
