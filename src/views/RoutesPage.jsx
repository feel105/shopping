import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { useSelector } from "react-redux";
import ProductsList from "./products/ProductsList";
import ProductDetails from "./products/ProductDetails";
import PageNotFound from "./notFound/pageNotFound";

const PrivateRoutes = () => {
  const location = useLocation();
  const { isLoggedIn } = useSelector((state) => state.AuthReducers);

  // if (!isLoggedIn) {
  //   return null;
  // }

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

function RoutesPage() {
  return (
    <div className="App">
      {/* {isLoading && <Loader />} */}
      <div className="fixed-header-fill show-md">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoutes />}>
              <Route path="productList" exect element={<ProductsList />} />
              <Route
                path="productList/productDetails/:id"
                exect
                element={<ProductDetails />}
              />
              <Route exect path="cartDetails" element={<ProductDetails />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default RoutesPage;
