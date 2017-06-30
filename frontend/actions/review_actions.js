import * as APIUtil from '../util/reviews_api_util';
import { fetchTrips } from './booking_actions';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const TOGGLE = 'TOGGLE';

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  };
};

export const toggle = () => {
  return {
    type: TOGGLE
  };
};

export const fetchReviews = spot_id => dispatch => {
  return APIUtil.fetchReviews(spot_id)
    .then((reviews) => dispatch(receiveReviews(reviews)));
};

export const createReview = review => dispatch => {
  return APIUtil.createReview(review)
    .then(() => dispatch(fetchTrips()))
};
