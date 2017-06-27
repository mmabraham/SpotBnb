export const REGISTER_MAP_CONTROL = 'REGISTER_MAP_CONTROL';

export const registerMapControl = (callback) => {
  return {
    type: REGISTER_MAP_CONTROL,
    callback,
  };
};
