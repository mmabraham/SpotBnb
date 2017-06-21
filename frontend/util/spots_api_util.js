export const fetchAllSpots = (filters) => {
  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    data: filters,
  })
}

export const createSpot = (spot) => {
  return $.ajax({
    method: 'POST',
    url: 'api/spots',
    data: { spot },
    error: (err) => console.log(err),
  })
}
