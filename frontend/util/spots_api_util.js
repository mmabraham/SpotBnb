export const fetchAllSpots = (filters) => {
  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    data: filters,
  });
};

export const fetchSpot = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/spots/${id}`,
  });
};

export const createSpot = (spot) => {
  return $.ajax({
    method: 'POST',
    url: 'api/spots',
    dataType: 'json',
    data: { spot },
  });
};
