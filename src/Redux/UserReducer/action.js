import axios from "axios";
import {
  GET_USER_DATA,
  LOGOUT_USER,
  PATCH_USER_DATA,
  POST_USER_DATA,
  USER_FAILURE,
  USER_REQUEST,
} from "./actionTypes";

const BASE_URL = "https://spend-wise-server.onrender.com/users";

/*
-------
Example
-------
data = {email: "tu1@gmail.com", password: "tu1"}
*/
export function getUserData(data) {
  return async function (dispatch) {
    try {
      const res = await axios(BASE_URL);
      const allUsers = res.data;

      for (let user of allUsers) {
        if (user.email === data.email && user.password === data.password) {
          dispatch({ type: GET_USER_DATA, payload: user });
          return { success: true };
        }
      }

      const error = allUsers.some((user) => user.email === data.email)
        ? "Password Incorrect"
        : "Account doesn't Exist, Please Sign Up";

      dispatch({ type: USER_FAILURE, payload: error });
      return { fail: error };
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch({ type: USER_FAILURE, payload: error.message });
      return { success: false };
    }
  };
}

/*
--------
Example:
--------
 newUserData = {
  name: "tu1",
  phone: "111222333",
  email: "tu1@gmail.com",
  password: "tu1",
  loginStatus: false,
  signupStatus: true,
  orders: [],
  cartItems: [],
  totalPrice: 0,
};
*/
export function postUserData(newUserData) {
  return async function (dispatch) {
    dispatch({ type: USER_REQUEST });
    try {
      await axios.post(BASE_URL, newUserData);
      dispatch({ type: POST_USER_DATA });
    } catch (error) {
      console.error("Error posting user data:", error);
      dispatch({ type: USER_FAILURE, payload: error.message });
    }
  };
}

export function patchUserData(id, data) {
  return async function (dispatch) {
    dispatch({ type: USER_REQUEST });
    try {
      await axios.patch(`${BASE_URL}/${id}`, data);
      dispatch({ type: PATCH_USER_DATA, payload: data });
    } catch (error) {
      console.error("Error patching user data:", error);
      dispatch({ type: USER_FAILURE, payload: error.message });
    }
  };
}

// to logout the user
export function logoutUser(id) {
  return async function (dispatch) {
    try {
      const data = {
        cartItems: [],
      };
      await axios.patch(`${BASE_URL}/${id}`, data);
      dispatch({ type: LOGOUT_USER });
    } catch (error) {
      console.log(error);
    }
  };
}
