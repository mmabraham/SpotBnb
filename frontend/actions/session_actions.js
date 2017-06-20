import * as sessionApiUtil from '../util/session_api_util';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const login = (user) => (dispatch) => {
  return sessionApiUtil.login(user)
    .then((res) => dispatch(receiveUser(res)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = (user) => (dispatch) => {
  return sessionApiUtil.signup(user)
    .then((fetchedUser) => dispatch(receiveUser(fetchedUser)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => (dispatch) => {
  return sessionApiUtil.logout(null)
    .then(() => dispatch(receiveUser(null)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
