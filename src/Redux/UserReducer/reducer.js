import {
  GET_USER_DATA,
  LOGOUT_USER,
  PATCH_USER_DATA,
  POST_USER_DATA,
  USER_FAILURE,
  USER_REQUEST,
} from "./actionTypes";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
  user: null,
};

export function reducer(state = initState, { type, payload }) {
  switch (type) {
    case USER_FAILURE: {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    }

    case USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_USER_DATA: {
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isError: false,
        errorMessage: "",
        user: payload,
      };
    }

    case POST_USER_DATA: {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    }

    case PATCH_USER_DATA: {
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isError: false,
        errorMessage: "",
        user: { ...state.user, ...payload },
      };
    }

    case LOGOUT_USER: {
      return initState;
    }

    default: {
      return state;
    }
  }
}
