export const createBooking = booking => {
  return $.ajax({
    method: 'POST',
    url: '/api/bookings',
    data: { booking },
  });
};

export const fetchTrips = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/bookings',
  });
};

export const cancelBooking = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${id}`
  });
};
