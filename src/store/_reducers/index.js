import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import ProductReducers from "./ProductReducers";
import CartReducers from "./CartReducers";

const rootReducer = combineReducers({
  AuthReducers,
  ProductReducers,
  CartReducers,
});

export default rootReducer;
