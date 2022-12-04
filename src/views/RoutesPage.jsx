import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { useSelector } from "react-redux";
import ProductsList from "./products/ProductsList";
import PageNotFound from "./notFound/pageNotFound";

const PrivateRoutes = () => {
  const location = useLocation();
  const { isLoggedIn } = useSelector((state) => state.AuthReducers);

  let token = localStorage.getItem("token");

  return isLoggedIn && token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

function RoutesPage() {
  return (
    <div className="App">
      {/* {isLoading && <Loader />} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="productList" element={<ProductsList />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default RoutesPage;
