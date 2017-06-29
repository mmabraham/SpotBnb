export const SET_MAP_CENTER = 'SET_MAP_CENTER';
export const CLEAR_MAP_CENTER = 'SET_MAP_CENTER';

export const setMapCenter = (place) => {
  return {
    type: SET_MAP_CENTER,
    place,
  };
};

export const clearMapCenter = () => {
  return {
    type: CLEAR_MAP_CENTER,
  };
};
