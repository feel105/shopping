import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Profile from "./profile/Profile";
import ProductsList from "./products/ProductsList";
import ProductDetails from "./products/ProductDetails";
import CartList from "./cart/CartList";
import PageNotFound from "./notFound/pageNotFound";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";

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
      {/* {isLoading && <Loader />}  <Header /> */}

      <div className="fixed-header-fill show-md">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<PrivateRoutes />}>
              <Route path="productList" exect element={<ProductsList />} />
              <Route
                path="productList/productDetails/:id"
                exect
                element={<ProductDetails />}
              />
              <Route exect path="cartDetails" element={<CartList />} />
              <Route exect path="profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}
export default RoutesPage;
