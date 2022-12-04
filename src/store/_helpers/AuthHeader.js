const AuthHeader = () => {
  let user = JSON.parse(localStorage.getItem("User-info"));
  let headers = { "Content-Type": "application/json" };
  if (user && user.token) {
    headers["Authorization"] = `Bearer ${user.token}`;
  }
  return headers;
};
export default AuthHeader;
