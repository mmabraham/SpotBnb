import * as BookingAPIUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';

export const createBooking = booking => dispatch => {
  return BookingAPIUtil.createBooking(booking);
};

export const receiveBookings = res => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings: res.bookings || {},
    spots: res.spots || {},
    hosts: res.hosts || {},
  };
};

export const fetchTrips = () => dispatch => {
  return BookingAPIUtil.fetchTrips({trips: true})
    .then((res) => dispatch(receiveBookings(res)));
};

export const cancelBooking = id => dispatch => {
  return BookingAPIUtil.cancelBooking(id)
    .then(() => dispatch(fetchTrips()));
};
