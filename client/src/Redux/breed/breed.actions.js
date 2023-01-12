import axios from "axios";
import { GET_BREEDS_ERROR, GET_BREEDS_LOADING, GET_BREEDS_SUCCESS, GET_SINGLE_BREEDS_ERROR, GET_SINGLE_BREEDS_LOADING, GET_SINGLE_BREEDS_SUCCESS } from "./breed.types";


export const getBreedsAPI = () => (dispatch) => {
  dispatch({ type: GET_BREEDS_LOADING });
  axios
    .get("https://dog.ceo/api/breeds/image/random/27")
    .then((r) => {
      //console.log("res",r.data.message);
       dispatch({ type: GET_BREEDS_SUCCESS, payload: r.data.message });
    })
    .catch(() => {
      dispatch({ type: GET_BREEDS_ERROR });
    });
};

export const getsingleBreedsAPI = () => (dispatch) => {
  dispatch({ type: GET_SINGLE_BREEDS_LOADING });
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((r) => {
      console.log("res",r.data.message);
       dispatch({ type: GET_SINGLE_BREEDS_SUCCESS, payload: r.data.message });
    })
    .catch(() => {
      dispatch({ type: GET_SINGLE_BREEDS_ERROR });
    });
};
