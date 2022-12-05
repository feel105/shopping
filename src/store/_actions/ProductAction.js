import {
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_SET,
} from "../_constants/ProductConstants";
import ProductService from "../_services/ProductService";
import { toast } from "react-toastify";
import { logout } from "./AuthAction";

export const getProductList = (limit, skip) => (dispatch) => {
  return ProductService.getProductList(limit, skip).then(
    (response) => {
      console.log(response.data);
      dispatch({
        type: PRODUCT_SUCCESS,
        payload: response.data,
      });
      return Promise.resolve(response.data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: PRODUCT_FAIL,
      });
      toast.error(message);
      if (error.response.status === 401) {
        console.log(error.response.status, " ERR ");
        dispatch(logout());
      }
      return Promise.reject();
    }
  );
};

export const getCategroryList = () => (dispatch) => {
  return ProductService.getCategoryList().then(
    (response) => {
      return Promise.resolve(response.data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
      return Promise.reject();
    }
  );
};

export const setProduct = (response) => (dispatch) => {
  dispatch({
    type: PRODUCT_SET,
    payload: response,
  });
  return Promise.resolve(response);
};
