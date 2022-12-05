import React from "react";

export default function PageNotFound() {
  return (
    <>
      <div className="fixed-header-fill show-md" />
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
      <section className="sec-nav" id="sec-nav"></section>
      <section className="sec-bradcrum hide-m">
        <div className="container">
          <div className="breadcrumb-wrapper">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Appliances</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Large Appliances</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Geysers &amp; Heaters</a>
              </li>
              <li className="breadcrumb-item active">Geysers</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="inner-main bg-light">
        <div className="container">
          <div className="row">
            {/*left Side Content*/}
            <div className="col">
              <div className="main-listing">
                <div className="listing-label border-bottom">
                  <h4>
                    Product Name{" "}
                    <span className="text-muted">(Total Items)</span>
                  </h4>
                  <div className="listing-sort hide-m">
                    <span>Sort by</span>
                    <select
                      className="form-control form-control-sm"
                      id="sorting-select"
                    >
                      <option selected="">Popularity</option>
                      <option>Price Low To High</option>
                      <option>Price High To Low</option>
                      <option>Discount</option>
                      <option>Fresh Arrivals</option>
                    </select>
                  </div>
                </div>
                <div className="filter-actives">
                  {/* <div className="f-a-child">
                    Samsung <span className="f-a-close vm-line-close" />
                  </div>
                  <div className="f-a-child">
                    Instant Geyser <span className="f-a-close vm-line-close" />
                  </div>
                  <div className="f-a-child">
                    <label htmlFor="color-Blue" className="color-label">
                      <span className="ColorSwatch Blue" />
                      Blue
                    </label>{" "}
                    <span className="f-a-close vm-line-close" />
                  </div> */}
                </div>

                <div className="grid-1 inner-product-list-grid">
                  <div className="grid-child">
                    <div className="product-box">
                      <div className="product-floating-top">
                        <div className="ft-item">
                          <i className="bx bx-heart" />
                          <i className="bx bxs-heart text-primary" />
                        </div>
                      </div>
                      <a href="#" className="product-img">
                        <div className="product-img-f" />
                        <img src="images/product.png" />
                      </a>
                      <a href="#" className="product-info">
                        <span className="product-name">
                          Apple iPhone 11 Pro (Midnight Green, 64 GB)
                        </span>
                        <span className="product-price">
                          ₹79,999 <span className="old">₹89,999</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation" className="sec-gap-t">
                  <ul className="pagination pagination-borderless justify-content-center">
                    <li className="page-item previous">
                      <a className="page-link" href="#">
                        <i className="vm-arrow-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        7
                      </a>
                    </li>
                    <li className="page-item next">
                      <a className="page-link" href="#">
                        <i className="vm-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
