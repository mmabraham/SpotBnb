import * as APIUtil from '../util/spots_api_util';
export const RECEIVE_SPOTS = 'RECEIVE_ALL_SPOTS';

export const receiveSpots = (spots) => {
  return {
    type: RECEIVE_SPOTS,
    spots,
  }
}

export const fetchAllSpots = () => dispatch => {
  return APIUtil.fetchAllSpots()
    .then((spots) => dispatch(receiveSpots(spots)))
}
