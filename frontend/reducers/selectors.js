export const asArray = obj => Object.keys(obj).map((key) => obj[key]);

export const bookingsInfo = state => {
  // TODO write this selector
  return state.bookings;
};
