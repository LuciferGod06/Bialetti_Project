import { SIGNIN_REQUEST, LOGIN_REQUEST } from "./actionTypes";

const postSignInRequest = (payload) => {return {
  type: SIGNIN_REQUEST, payload
}};

const postLoginRequest = (payload) => {
  return { type: LOGIN_REQUEST, payload};
};

export const postNewUser = (payload) => (dispatch) => {
    dispatch(postSignInRequest(payload));
};

export const postNewUserLogin = (payload) => (dispatch) => {
    dispatch(postLoginRequest(payload));
};
