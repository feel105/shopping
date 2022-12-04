import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../_constants/AuthConstants";
import AuthService from "../_services/AuthService";
import { toast } from "react-toastify";

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (response) => {
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("User-info", JSON.stringify(response.data));
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response.data },
      });
      toast.success("Login successfully!");
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
        type: LOGIN_FAIL,
      });

      toast.error(message);

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  return AuthService.logout()
    .then((response) => {
      console.log("response", response);
      if (response.data) {
        localStorage.removeItem("token");
        localStorage.removeItem("User-info");
      }
      dispatch({
        type: LOGOUT,
      });
      // history.push("/");
      return Promise.resolve();
    })
    .catch((error) => {
      localStorage.clear();
      dispatch({
        type: LOGOUT,
      });
    });
};
