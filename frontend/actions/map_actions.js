export const REGISTER_MAP_CONTROL = 'REGISTER_MAP_CONTROL';
export const SET_MAP_CENTER = 'SET_MAP_CENTER';
export const CLEAR_MAP_CENTER = 'SET_MAP_CENTER';


export const registerMapControl = (callback) => {
  return {
    type: REGISTER_MAP_CONTROL,
    callback,
  };
};

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
