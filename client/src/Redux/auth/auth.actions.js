import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  RESISTER_ERROR,
  RESISTER_LOADING,
  RESISTER_SUCCESS,
} from "./auth.types";

export const registerAPI = (data) => (dispatch) => {
  dispatch({ type: RESISTER_LOADING});
  axios
    .post("http://localhost:8080/register", data)
    .then((r) => {
      dispatch({ type: RESISTER_SUCCESS});
    })
    .catch(() => {
      dispatch({ type: RESISTER_ERROR });
    });
};

export const loginAPI = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("http://localhost:8080/login", {
      email:data.email,
      password:data.password
    })
    .then((r) => {
     console.log("r",r.data);
      dispatch({ type: LOGIN_SUCCESS, payload: r.data});
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const logoutAPI = () => ({ type: LOGOUT });
