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
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/spots',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: { spot },
  });
};
