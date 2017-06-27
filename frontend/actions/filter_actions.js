import { fetchAllSpots } from './spot_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_DATES = 'UPDATE_DATES';
export const UPDATE_CAPACITY = 'UPDATE_CAPACITY';
export const UPDATE_FILTER = 'UPDATE_FILTER';

// deprecated
export const updateBounds = bounds => (dispatch, getState) => {
  dispatch({
    type: UPDATE_BOUNDS,
    bounds,
  });
  fetchAllSpots(getState().filters)(dispatch);
};

// deprecated
export const updateDates = dates => (dispatch, getState) => {
  dispatch({
    type: UPDATE_DATES,
    dates,
  })
  fetchAllSpots(getState().filters)(dispatch);
}

// deprecated
export const updateCapacity = capacity => (dispatch, getState) => {
  dispatch({
    type: UPDATE_CAPACITY,
    capacity,
  })
  fetchAllSpots(getState().filters)(dispatch);
}

export const updateFilter = (filterType, filter) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_FILTER,
    filterType,
    [filterType]: filter,
  })
  fetchAllSpots(getState().filters)(dispatch);
}
