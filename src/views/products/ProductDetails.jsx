import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const ProductDetails = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);

  const ProductReducers = useSelector((state) => state.ProductReducers);
  const productData = ProductReducers?.response?.products;
  console.log(productData, "productData11");
  useEffect(() => {
    if (productData === undefined) {
      console.log(productData, "productData222");
      history("/productList");
    } else {
      let product = productData.find((product) => product.id !== id);
      console.log(product, "product");
      setItem(product);
    }
  }, [id]);

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
                <Link>{item?.category}</Link>
              </li>
              <li className="breadcrumb-item">
                <Link>{item?.brand}</Link>
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
                <div className="product-display-slider owl-carousel owl-theme">
                  <div
                    className="item"
                    data-thumb='<img src="images/product/product4.jpeg" />'
                  >
                    <a
                      href="images/product/product4.jpeg"
                      data-fancybox="product-display"
                    >
                      <img
                        className="zoom-trigger img-trigger"
                        src={item?.thumbnail}
                        data-zoom="images/product/product4.jpeg"
                      />

                      <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                      </Swiper>
                    </a>
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
                  <del>₹89,999</del> (Inclusive of all taxes)
                </span>
                <span className="normal-price h3 text-primary">
                  ₹{item?.price}
                </span>
              </div>
              <div className="product-detail-child view2">
                <div className="product-detail-child-label text-muted">QTY</div>
                <div className="pro-detail-child-detail">
                  <div className="quantity q-sm clearfix">
                    <input
                      type="number"
                      min={1}
                      max={9}
                      step={1}
                      defaultValue={1}
                    />
                  </div>
                </div>
              </div>

              <div className="product-detail-child hide-m">
                <div className="d-flex buy-btn">
                  <button className="btn btn-dark btn-lg">
                    <i className="bx bxs-shopping-bag mr-2" />
                    Add to cart
                  </button>
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
                      64 GB ROM
                    </li>
                    <li>
                      <i className="icon" />
                      14.73 cm (5.8 inch) Super Retina XDR Display
                    </li>
                    <li>
                      <i className="icon" />
                      12MP + 12MP + 12MP | 12MP Front Camera
                    </li>
                    <li>
                      <i className="icon" />
                      A13 Bionic Chip Processor
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
                  <div className="label text-muted">In The Box</div>
                  <div className="desc">
                    Handset, EarPods with Lightning Connector, USB-C to
                    Lightning Cable, 18W USB-C Power Adapter, Documentation
                  </div>
                </div>
                <div className="child">
                  <div className="label text-muted">Model Number</div>
                  <div className="desc">MWC62HN/A</div>
                </div>
                <div className="child">
                  <div className="label text-muted">Model Name</div>
                  <div className="desc">iPhone 11 Pro</div>
                </div>
                <div className="child">
                  <div className="label text-muted">Color</div>
                  <div className="desc">Midnight Green</div>
                </div>
                <div className="child">
                  <div className="label text-muted">Browse Type</div>
                  <div className="desc">Smartphones</div>
                </div>
                <div className="child">
                  <div className="label text-muted">SIM Type</div>
                  <div className="desc">Dual Sim</div>
                </div>
                <div className="child">
                  <div className="label text-muted">Hybrid Sim Slot</div>
                  <div className="desc">No</div>
                </div>
                <div className="child">
                  <div className="label text-muted">Touchscreen</div>
                  <div className="desc">Yes</div>
                </div>
                <div className="child">
                  <div className="label text-muted">OTG Compatible</div>
                  <div className="desc">No</div>
                </div>
                <div className="child">
                  <div className="label text-muted">SAR Value</div>
                  <div className="desc">
                    1.6 W/kg (over 1 g) SAR Limit, Head: 1.18, Body: 1.16
                  </div>
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
