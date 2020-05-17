import { postData, postFormData } from "../../util/Api";
import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  USER_DATA,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from "../../constants/ActionTypes";
import {
  ACCESS_TOKEN,
  USER,
  REQUESTING,
  SUCCESS,
  ERROR,
} from "../../constants/Constant";

export function signInRequest() {
  return {
    type: SIGN_IN_REQUEST,
    status: REQUESTING,
  };
}

export function signInSuccess(payload) {
  return {
    type: SIGN_IN_SUCCESS,
    status: SUCCESS,
    payload,
  };
}

export function signInFailure(payload) {
  return {
    type: SIGN_IN_FAILURE,
    status: ERROR,
    payload,
  };
}
export function signUpRequest() {
  return {
    type: SIGN_UP_REQUEST,
    status: REQUESTING,
  };
}

export function signUpSuccess(payload) {
  return {
    type: SIGN_UP_SUCCESS,
    status: SUCCESS,
    payload,
  };
}

export function signUpFailure(payload) {
  return {
    type: SIGN_UP_FAILURE,
    status: ERROR,
    payload,
  };
}
export function signOutRequest(payload) {
  return {
    type: SIGN_OUT_REQUEST,
    status: REQUESTING,
    payload,
  };
}

export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS,
    status: SUCCESS,
  };
}

export function signOutFailure(payload) {
  return {
    type: SIGN_OUT_FAILURE,
    status: ERROR,
    payload,
  };
}
export const signIn = (user) => {
  return async (dispatch) => {
    dispatch(signInRequest());
    try {
      const url = `auth/user`;
      const result = await postData(url, user);
      const json = await result.data;
      if (json.error) throw new Error(json.message);

      if (json.status === 200) {
        localStorage.setItem(
          ACCESS_TOKEN,
          JSON.stringify(json.Results.token.original.access_token)
        );
        localStorage.setItem(USER, JSON.stringify(json.Results.user));
        return dispatch(signInSuccess(json.Results));
      } else return dispatch(signInFailure(json.message));
    } catch (e) {
      return dispatch(signInFailure(e.message));
    }
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    dispatch(signUpRequest());
    try {
      const url = `users`;
      const result = await postData(url, user);
      const json = await result.data;
      console.log(json);
      if (json.error) throw new Error(json.message);
      console.log(json.status);
      console.log(json);
      console.log(json.token);
      if (json.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, JSON.stringify(json.token));
        localStorage.setItem(USER, JSON.stringify(json.user));
        return dispatch(signUpSuccess(json.Results));
      } else return dispatch(signUpFailure(json.message));
    } catch (e) {
      return dispatch(signUpFailure(e.message));
    }
  };
};
export const showAuthMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message,
  };
};

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url,
  };
};

export const showAuthLoader = () => {
  return {
    type: ON_SHOW_LOADER,
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};
export const hideAuthLoader = () => {
  return {
    type: ON_HIDE_LOADER,
  };
};
