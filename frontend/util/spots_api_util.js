export const fetchAllSpots = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/spots',
  })
}
