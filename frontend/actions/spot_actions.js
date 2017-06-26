import * as APIUtil from '../util/spots_api_util';


export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

export const receiveSpots = (spots) => {
  return {
    type: RECEIVE_SPOTS,
    spots,
  }
}

export const receiveSpot = ({spot, host, bookings}) => {
  return {
    type: RECEIVE_SPOT,
    spot,
    bookings,
    host,
  }
}

export const fetchAllSpots = (filters) => dispatch => {
  return APIUtil.fetchAllSpots(filters)
    .then((spots) => dispatch(receiveSpots(spots)))
}

export const createSpot = spot => dispatch => {
  return APIUtil.createSpot(spot)
}

export const fetchSpot = (id) => dispatch => {
  return APIUtil.fetchSpot(id)
    .then((spotDetails) => dispatch(receiveSpot(spotDetails)))
}
