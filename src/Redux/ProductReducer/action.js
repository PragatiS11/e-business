import axios from "axios";
import {
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

const BASE_URL = "https://spend-wise-server.onrender.com/products";

export function getProducts(paramObj) {
  return async function (dispatch) {
    dispatch({ type: PRODUCTS_REQUEST });
    try {
      const res = await axios(BASE_URL, paramObj);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: PRODUCTS_FAILURE });
    }
  };
}
