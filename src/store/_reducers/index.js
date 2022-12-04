import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import ProductReducers from "./ProductReducers";

const rootReducer = combineReducers({
  AuthReducers,
  ProductReducers,
});

export default rootReducer;
