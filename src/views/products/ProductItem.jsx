import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ data }) => {
  console.log(data, "productsData");
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
