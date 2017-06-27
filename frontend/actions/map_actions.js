export const REGISTER_MAP_CONTROL = 'REGISTER_MAP_CONTROL';

export const RegisterMapControl = (callback) => {
  return {
    type: REGISTER_MAP_CONTROL,
    callback,
  };
};
