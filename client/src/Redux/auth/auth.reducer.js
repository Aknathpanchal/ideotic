import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  RESISTER_ERROR,
  RESISTER_LOADING,
  RESISTER_SUCCESS,
} from "./auth.types";

let token = localStorage.getItem("token");
const initalState = {
  loading: false,
  error: false,
  isAuth: !!token,
  token: token,
  
};

export const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload,
      };
    }
    case LOGIN_ERROR: {
      return { ...state, loading: false, error: true, isAuth: false };
    }
    case RESISTER_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case RESISTER_SUCCESS: {
      
      return {
        ...state,
        loading: false,
        error: false,
        
      };
    }
    case RESISTER_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return { ...state, isAuth: false, token: "" };
    }
    default: {
      return state;
    }
  }
};
