import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProductCart,
  removeProductCart,
} from "../../store/_actions/CartAction";

const ProductItem = ({ data }) => {
  console.log(data, "productsData");
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addProductCart(product));
  };

  const removeCart = (product) => {
    dispatch(removeProductCart(product));
  };

  return (
    <>
      <div className="col">
        <div className="proBox">
          <div className="badgeList ">
            <div className="badgeChild">{data.title}</div>
            <div className="badgeChild">{data.description}</div>
          </div>
          <div className="proPicture">
            <img src={`${data.thumbnail}`} width={90} height={90} alt="name" />
          </div>
          <div className="addWish">
            <i className="fa fa-heart" />
          </div>
          <div className="proMeta">
            <div className="proTitle">{data.brand}</div>
            <div className="priceBox">
              <span className="proPrice">{data.price}</span>
            </div>
            <div className="priceDisc">
              <span className="fontsmall">
                Discount{" "}
                <span className="text-danger">{data.discountPercentage} %</span>
              </span>
            </div>
          </div>
          <div className="proHover">
            <Link
              className="login-link float-right"
              to={`productDetails/${data.id}`}
            >
              <span>View Details</span>
            </Link>

            <div className="product-detail-child hide-m">
              <div className="d-flex buy-btn">
                <button
                  onClick={() => removeCart(data)}
                  className="btn btn-primary btn-lg mr-2"
                >
                  <i className="bx bxs-bolt mr-2" />
                  Remove Product
                </button>
                <button
                  onClick={() => addToCart(data)}
                  className="btn btn-dark btn-lg"
                >
                  <i className="bx bxs-shopping-bag mr-2" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
