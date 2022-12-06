import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fa fa-map-marker-alt" />
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>Lorem ipsum Lorem ipsum,</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fa fa-phone" />
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>9879552619</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fa fa-envelope-open" />
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>feel619patel@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src={require("../../assets/images/logo.png")}
                        className="img-fluid"
                        width={55}
                        height={55}
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <Link>
                      <i className="fa fa-facebook-f facebook-bg" />
                    </Link>
                    <Link>
                      <i className="fa fa-twitter twitter-bg" />
                    </Link>
                    <Link>
                      <i className="fa fa-google google-bg" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link>Home</Link>
                    </li>
                    <li>
                      <Link>about</Link>
                    </li>
                    <li>
                      <Link>services</Link>
                    </li>
                    <li>
                      <Link>Contact</Link>
                    </li>
                    <li>
                      <Link>About us</Link>
                    </li>
                    <li>
                      <Link>Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fa fa-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright © 2022, All Right Reserved</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link>Home</Link>
                    </li>
                    <li>
                      <Link>Terms</Link>
                    </li>
                    <li>
                      <Link>Privacy</Link>
                    </li>
                    <li>
                      <Link>Policy</Link>
                    </li>
                    <li>
                      <Link>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
