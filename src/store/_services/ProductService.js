import axios from "axios";
import authHeader from "../_helpers/AuthHeader";
import { API_URL } from "../_helpers/Config";

//getProductList - get listing of product
const getProductList = (limit, skip) => {
  return axios.get(API_URL + `auth/products?limit=${limit}&skip=${skip}`, {
    headers: authHeader(),
  });
};

const getCategoryList = () => {
  return axios.get(API_URL + `auth/products/categories`, {
    headers: authHeader(),
  });
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getProductList, getCategoryList };
