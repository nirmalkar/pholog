import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  USER_DATA,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from '../../constants/ActionTypes';

import { USER } from '../../constants/Constant';

const INIT_STATE = {
  loader: false,
  alertMessage: '',
  showMessage: false,
  initURL: '',
  authUser: localStorage.getItem(USER),
  passwordReset: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        loader: true,
        authUser: action.payload
      };
    }

    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }

    case SIGN_UP_FAILURE: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload,
        showMessage: true,
        authUser: null
      };
    }

    case SIGN_IN_REQUEST: {
      return {
        ...state,
        loader: true,
        authUser: action.payload
      };
    }

    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }

    case SIGN_IN_FAILURE: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload,
        showMessage: true,
        authUser: null
      };
    }

    case SIGN_OUT_REQUEST: {
      return {
        ...state,
        loader: true,
        authUser: action.payload
      };
    }

    case SIGN_OUT_SUCCESS: {
      return {
        ...state,
        authUser: null,
        initURL: '/',
        loader: false
      };
    }

    case SIGN_OUT_FAILURE: {
      return {
        ...state,
        loader: false,
        alertMessage: action.payload,
        showMessage: true,
        authUser: action.payload
      };
    }
    case INIT_URL: {
      return {
        ...state,
        initURL: action.payload
      };
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: '',
        showMessage: false,
        loader: false
      };
    }

    case ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true
      };
    }
    case ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false
      };
    }
    default:
      return state;
  }
};