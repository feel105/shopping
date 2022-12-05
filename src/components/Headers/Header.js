import React from "react";

const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <div className="container">
          <div className="align-items-center row">
            <div className="col col-md-auto">
              <div className="logo">
                <a href="#">
                  <img src="./assets/images/logo-w.svg" alt="" title="" />
                </a>
              </div>
            </div>
            <div className="col-auto order-md-12">
              <div className="header-right">
                <div className="right-buttons">
                  <a href="#" className="links-child">
                    <i className="vm-ic vm-line-bag" />
                  </a>
                </div>
                <div className="right-buttons dropdown">
                  <a className="links-child" href="#">
                    <i className="vm-ic vm-line-user" />
                    <span className="label">Profile</span>
                  </a>
                  <div className="right-dropdown">
                    <ul className="user-menu">
                      <div className="profile-highlight">
                        <img
                          src="images/user.jpg"
                          alt="profile-img"
                          width={36}
                          height={36}
                        />
                        <div className="details">
                          <h5>Kenny Lee</h5>
                          <p>Team Hallaway</p>
                        </div>
                      </div>
                      <li className="user-menu__item">
                        <a
                          className="user-menu-link"
                          href="#"
                          data-toggle="modal"
                          data-target="#login"
                        >
                          <i className="vm-ic vm-login" />
                          <div>Login</div>
                        </a>
                      </li>
                      <li className="user-menu__item">
                        <a className="user-menu-link" href="#">
                          <i className="vm-ic vm-box" />
                          <div>Orders</div>
                        </a>
                      </li>
                      <li className="user-menu__item">
                        <a className="user-menu-link" href="#">
                          <i className="vm-ic vm-heart" />
                          <div>Wishliast</div>
                        </a>
                      </li>
                      <li className="user-menu__item">
                        <a className="user-menu-link" href="#">
                          <i className="vm-ic vm-phone" />
                          <div>Contact Us</div>
                        </a>
                      </li>
                      <div className="footer">
                        <li className="user-menu__item">
                          <a className="user-menu-link" href="#">
                            Saved Cards
                          </a>
                        </li>
                        <li className="user-menu__item">
                          <a className="user-menu-link" href="#">
                            Saved Address
                          </a>
                        </li>
                        <li className="user-menu__item">
                          <a className="user-menu-link" href="#">
                            Edit Profile
                          </a>
                        </li>
                        <li className="user-menu__item">
                          <a
                            className="user-menu-link"
                            href="#"
                            style={{ color: "#F44336" }}
                          >
                            Logout
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md order-md-1">
              <div className="input-group search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products, Brands and More..."
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-primary">
                    <i className="bx bx-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
