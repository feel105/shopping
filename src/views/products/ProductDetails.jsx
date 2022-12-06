import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { addProductCart } from "../../store/_actions/CartAction";

const ProductDetails = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const ProductReducers = useSelector((state) => state.ProductReducers);
  const productData = ProductReducers?.response?.products;
  console.log(productData, "productData11");
  const productLoad = () => {
    if (productData === undefined) {
      console.log(productData, "productData222");
      history("/productList");
    } else {
      let product = productData.find((product) => product.id !== id);
      console.log(product, "product");
      setItem(product);
    }
  };

  useEffect(() => {
    productLoad();
  }, [id]);

  const addToCart = (product) => {
    dispatch(addProductCart(product));
  };

  return (
    <>
      <section className="sec-bradcrum hide-m">
        <div className="container">
          <div className="breadcrumb-wrapper">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/productList`}>{item?.category}</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/productList`}>{item?.brand}</Link>
              </li>
              <li className="breadcrumb-item active">{item?.title}</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="inner-main bg-light">
        <div className="container">
          <div className="ProductMain card-gap bg-white">
            <div className="product-display pro-wish">
              <div className="product-display-img">
                <div className="product-floating-top">
                  <div className="ft-item">
                    <i className="bx bx-heart" />
                    <i className="bx bxs-heart text-primary" />
                  </div>
                </div>

                <div className="">
                  <div className="item">
                    <Link data-fancybox="product-display">
                      <Swiper
                        style={{
                          "--swiper-navigation-color": "#fff",
                          "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        {item?.images.map((val, ind) => {
                          return (
                            <SwiperSlide key={ind}>
                              <img
                                src={`${val}`}
                                width={90}
                                height={90}
                                alt={val}
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                      >
                        {item?.images.map((val, ind) => {
                          return (
                            <SwiperSlide key={ind}>
                              <img
                                src={`${val}`}
                                width={90}
                                height={90}
                                alt={val}
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-details zoom-view p-fix">
              <h1 className="title h4 mb-2">
                {item?.title} ({item?.brand})
              </h1>
              <div className="title-review">
                <div className="star-count bg-success">
                  <div>{item?.rating}</div>
                  <i className="fa fa-star ml-1" />
                </div>
                <Link className="">{item?.rating} ratings</Link>
              </div>
              <div className="pro-price border-bottom py-1">
                <span className="old-price text-muted d-block font14">
                  <b>{item?.discountPercentage}</b>% (discount)
                </span>
                <span className="normal-price h3 text-primary">
                  ₹{item?.price}
                </span>
              </div>
              <div className="product-detail-child view2">
                <div className="product-detail-child-label text-muted">QTY</div>
                <div className="pro-detail-child-detail">
                  <div className="quantity q-sm clearfix">1</div>
                </div>
              </div>

              <div className="product-detail-child">
                <div className="d-flex buy-btn">
                  <button
                    onClick={() => addToCart(item)}
                    className="btn btn-dark btn-lg"
                  >
                    <i className="fa fa-shopping-bag mr-2" />
                    Add to cart
                  </button>
                  <Link
                    to="/cartDetails"
                    className="btn btn-primary btn-lg ml-2"
                  >
                    <i className="fa fa-shopping-bag mr-2" />
                    Buy Now
                  </Link>
                </div>
              </div>

              <div className="product-detail-child view2">
                <div className="product-detail-child-label text-muted">
                  Highlights
                </div>
                <div className="pro-detail-child-detail">
                  <ul className="ul-list view1">
                    <li>
                      <i className="icon" />
                      {item?.description}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-detail-child view2">
                <div className="product-detail-child-label text-muted">
                  Description
                </div>
                <div className="pro-detail-child-detail">
                  <h5>
                    {item?.category}: {item?.description}
                  </h5>
                  <p>{item?.description}</p>
                </div>
              </div>
              <div className="list-view2 font14 border-top mb-2">
                <div className="h5 title">Specifications</div>
                <div className="child">
                  <div className="label text-muted">{item?.category}</div>
                  <div className="desc">{item?.brand}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
