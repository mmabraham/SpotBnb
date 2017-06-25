import * as BookingAPIUtil from '../util/bookings_api_util';

export const createBooking = booking => dispatch => {
  return BookingAPIUtil.createBooking(booking);
}
