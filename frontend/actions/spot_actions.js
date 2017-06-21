import * as APIUtil from '../util/spots_api_util';


export const RECEIVE_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECIEVE_SPOT = 'RECIEVE_SPOT';

export const receiveSpots = (spots) => {
  return {
    type: RECEIVE_SPOTS,
    spots,
  }
}

export const receiveSpot = (spot) => {
  return {
    type: RECEIVE_SPOT,
    spot,
  }
}

export const fetchAllSpots = (filters) => dispatch => {
  return APIUtil.fetchAllSpots(filters)
    .then((spots) => dispatch(receiveSpots(spots)))
}

export const createSpot = spot => dispatch => {
  return APIUtil.createSpot(spot)
}
// TODO
// export const fetchSpot = (id) => dispatch => {
//   return APIUtil.fetchSpot(id)
// }
