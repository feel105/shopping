import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function CartList() {
  const cartReducers = useSelector((state) => state.CartReducers);

  console.log(cartReducers, "CartReducers");

  return (
    <div className="container ">
      <section className="inner-main2 bg-light pb-2 sec-gap">
        <div className="container">
          <h2>My Cart</h2>
          <p className="text-muted">
            Free shipping applies if the order price reaches
            <span className="text-primary">₹500</span>. Special products are not
            included
          </p>
          <div className="cart-wrap">
            {cartReducers?.cartItems?.length > 0 ? (
              <>
                <div className="cart-list-item head">
                  <div className="cart-product">
                    <span className="text-muted">Product</span>
                  </div>
                  <div className="cart-price">
                    <span className="text-muted">Price</span>
                  </div>
                  <div className="cart-qty">
                    <span className="text-muted">QTY</span>
                  </div>
                  <div className="cart-total">
                    <span className="text-muted">Total</span>
                  </div>
                  <div className="cart-action" />
                </div>
                {cartReducers.cartItems.map((item, i) => {
                  return <CartItem data={item} key={i} />;
                })}
              </>
            ) : (
              <div>
                No Cart Item found <br />
                <Link to="/productList" className="btn btn-min btn-dark">
                  Shop more
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="bg-white sticky-bottom payment-sticky border-top">
        <div className="container">
          <div className="row">
            <div className="col-md col-12 d-flex align-items-center py-2 remove-items">
              <div className="border-right pr-3">
                <button className="btn btn-link px-0 text-uppercase">
                  Remove all items from cart
                </button>
              </div>
              <h6 className="text-muted pl-3">
                You have <span className="text-primary">2</span> item in cart
              </h6>
            </div>
            <div className="col-md-auto col-12 d-flex justify-content-between">
              <div className="align-self-center py-2 pr-4">
                <h3 className="text-primary fw7">Total: ₹1,59,998</h3>
                <p className="text-muted font14">Not including shipping fee</p>
              </div>
              <Link className="btn btn-primary">
                <span>Place Order</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
