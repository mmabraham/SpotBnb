import * as APIUtil from '../util/reviews_api_util';

export const RECIEVE_REVIEWS = 'RECIEVE_REVIEWS';
export const TOGGLE = 'TOGGLE';

export const recieveReviews = reviews => {
  return {
    type: RECIEVE_REVIEWS,
    reviews,
  }
}

export const toggle = () => {
  return {
    type: TOGGLE
  }
}

export const fetchReviews = spot_id => dispatch => {
  return APIUtil.fetchReviews(spot_id)
    .then((reviews) => dispatch(recieveReviews(reviews)))
}
