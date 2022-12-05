import { CART_SUCCESS, CART_REMOVE } from "../_constants/CartConstants";
//import { useSelector } from "react-redux";

export const addProductCart = (products) => (dispatch) => {
  //add product
  dispatch({
    type: CART_SUCCESS,
    payload: products,
  });
};

export const removeProductCart = (products) => (dispatch) => {
  //remove product from list
  dispatch({
    type: CART_REMOVE,
    payload: products,
  });
};
