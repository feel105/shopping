import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.AuthReducers);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img
                src={require("../../assets/images/logo.png")}
                className="img-fluid"
                width={55}
                height={55}
                alt="logo"
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/productList" className="nav-link">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/profile" className="display-6 ml-2 text-white">
                        <i className="fa fa-user" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cartDetails"
                        className="display-6 ml-2 text-white"
                      >
                        <i className="fa fa-shopping-cart" />
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login" className="nav-link">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
