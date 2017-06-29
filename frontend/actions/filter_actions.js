import { fetchAllSpots } from './spot_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_DATES = 'UPDATE_DATES';
export const UPDATE_CAPACITY = 'UPDATE_CAPACITY';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

// deprecated
export const updateBounds = bounds => (dispatch, getState) => {
  dispatch({
    type: UPDATE_BOUNDS,
    bounds,
  });
  fetchAllSpots(getState().filters)(dispatch);
};

export const updateFilter = (filterType, filter) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_FILTER,
    filterType,
    [filterType]: filter,
  });
  fetchAllSpots(getState().filters)(dispatch);
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  };
};
