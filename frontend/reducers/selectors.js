export const asArray = obj => Object.keys(obj).map((key) => obj[key]);

export const tripsInfo = ({bookings, users, spots}) => {
  const trips = [];
  for (let key in bookings) {
    const start_date = new Date(bookings[key].start_date);
    const end_date = new Date(bookings[key].end_date);
    trips.push({
      id: key,
      spot: spots[bookings[key].spot_id],
      host: users[spots[bookings[key].spot_id].host_id],
      start_date,
      end_date,
      duration: Math.round((end_date.getTime() - start_date.getTime()) / (1000 * 60 * 60 * 24)),
    });
  }
  return trips;
};
