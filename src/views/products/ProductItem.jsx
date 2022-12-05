import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductItem = ({ data }) => {
  console.log(data, "productsData");
  const dispatch = useDispatch();

  return (
    <>
      <div className="grid-child">
        <div className="product-box">
          <div className="product-floating-top">
            <div className="ft-item">
              <i className="bx bx-heart" />
              <i className="bx bxs-heart text-primary" />
            </div>
          </div>
          <Link className="  product-img  " to={`productDetails/${data.id}`}>
            <div className="product-img-f" />
            <img
              src={`${data.thumbnail}`}
              width={90}
              height={90}
              alt={data.title}
            />
          </Link>

          <Link className="product-info" to={`productDetails/${data.id}`}>
            <span className="product-name">{data.title}</span>
            <span className="product-price">
              Rs. {data.price}
              <span className="product-discountPercentage">
                ({data.discountPercentage}% OFF)
              </span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
