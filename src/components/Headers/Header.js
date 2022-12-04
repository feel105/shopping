import React, { useState } from "react";

const Header = () => {
   
  return (
    <>
        <header id="header" className="header">
        <div className="header-main">
          <div className="row align-items-center">
            <div className="col-auto col-lg order-lg-2 mx-lg-auto me-auto">
              <div className="brandLogo">
                <div id="horizontal-navtoggle" className="animated-arrow">
                  <span />
                </div>
                <a className="cursor-pointer">
                  <img
                    src="https://dev-mcc-digital-memory.s3.us-west-2.amazonaws.com/store_5/store/1f9e8925-557c-4f6f-8c78-b1e754611415.jpg"
                    alt="https://dev-mcc-digital-memory.s3.us-west-2.amazonaws.com/store_5/store/1f9e8925-557c-4f6f-8c78-b1e754611415.jpg"
                  />
                </a>
              </div>
            </div>
            <div className="col-auto col-lg-3 order-lg-3">
              <div className="headerRight">
                <div className="divChild dropdownWrap">
                  <div className="childAct dropdownAct">
                    <span>Account</span>
                    <i className="bx bx-user" />
                  </div>
                  <div className="dropdownBox">
                    <div className="dropdownCont">
                      <div className="dropdownContHead d-none">
                        <span className="title">New Customer?</span>
                        <a
                          className="btn btn-primary btn-xs"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#signup"
                        >
                          <span>Sign up</span>
                        </a>
                      </div>
                      <div className="dropdownContBody">
                        <ul className="dLinksGroup">
                          <li>
                            <a className="dLinks cursor-pointer">
                              <i className="bx bx-log-in-circle" />
                              <span>Login</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divChild">
                  <a className="childAct cursor-pointer">
                    <span>Your Bag</span>
                    <i className="bx bx-shopping-bag" />
                    <div className="CartCount d-none">0</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 order-lg-1">
              <div className="divChild dropdownWrap">
                <div className="headerLeft">
                  <div className="divChild searchBox" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-wrapper" className="horizontalMain">
          <div className="container">
            <nav className="horizontalMenu d-md-flex">
              <ul className="horizontalMenu-list">
                <li>
                  <a href="/stores/jewelry-palace/categories/5fcd8659-5a8c-4f58-bc30-f721377b6064">
                    Earrings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
