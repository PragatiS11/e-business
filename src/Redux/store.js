import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { reducer as userReducer } from "./UserReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userReducer,
  productReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
