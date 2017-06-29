export const fetchAllSpots = (filters) => {
  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    data: { filters },
  });
};

export const fetchSpot = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/spots/${id}`,
  });
};

export const createSpot = (spot) => {
  console.log(spot);
  return $.ajax({
    method: 'POST',
    url: 'api/spots',
    contentType: false,
    processData: false,
    data: spot,
  });
};
