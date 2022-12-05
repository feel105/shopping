import { PRODUCT_SUCCESS, PRODUCT_FAIL } from "../_constants/ProductConstants";
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

/*
export const categroryList = () => (dispatch) => {
  return ProductService.getCategoryList().then(
    (response) => {
      dispatch({
        type: CATEGORY_SUCCESS,
        payload: { result: response.data },
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
        type: CATEGORY_FAIL,
      });
      toast.error(message);
      return Promise.reject();
    }
  );
};
*/
