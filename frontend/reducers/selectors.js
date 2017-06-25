export const asArray = obj => Object.keys(obj).map((key) => obj[key]);

export const tripsInfo = ({bookings, users, spots}) => {
  const trips = [];
  for (let key in bookings) {
    trips.push({
      spot: spots[bookings[key].spot_id],
      host: users[spots[bookings[key].spot_id].host_id],
      start_date: bookings[key].start_date,
      end_date: bookings[key].end_date,
    });
  }
  return trips;
};
