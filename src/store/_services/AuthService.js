import axios from "axios";
import authHeader from "../_helpers/AuthHeader";
import { API_URL } from "../_helpers/Config";

const login = (username, password) => {
  return axios.post(API_URL + "auth/login", { username, password });
};

const logout = () => {
  return axios.post(API_URL + `auth/logout`, null, { headers: authHeader() });
};

const register = () => {
  return axios.post(API_URL + `auth/register`, null);
};

export default { login, logout, register };
