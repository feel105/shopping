import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../_constants/AuthConstants";

let user = JSON.parse(localStorage.getItem("User-info"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function AuthReducers(state = initialState, action) {
  const { type, payload } = action;
  console.log(state, "AuthReducers", payload);
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
