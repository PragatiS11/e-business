import {
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST:
      return { ...state, isLoading: true };

    case PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };

    default:
      return state;
  }
};
