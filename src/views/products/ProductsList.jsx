import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getProductList,
  getCategroryList,
} from "../../store/_actions/ProductAction";
import PaginatedItems from "../../components/Paginations/pagination";
import ProductItem from "./ProductItem";
//import { useSelector } from "react-redux";

export default function ProductsList() {
  const dispatch = useDispatch();
  const [productData, setProducts] = useState({
    total: 0,
    page: 10,
    skip: 0,
    limit: 10,
    products: [],
  });
  const [categoryData, setCategory] = useState([]);
  //const ProductReducers = useSelector((state) => state.ProductReducers);

  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * productData.limit) % productData.total;
    setItemOffset(newOffset);
  };

  const getList = () => {
    //dispatch(setLoading(true));
    dispatch(getProductList(productData.limit, itemOffset))
      .then((response) => {
        setProducts(response);
        //dispatch(setLoading(false));
      })
      .catch(() => {
        // dispatch(setLoading(false));
      });
  };

  const categoryList = () => {
    //dispatch(setLoading(true));
    dispatch(getCategroryList())
      .then((response) => {
        setCategory(response);
        //dispatch(setLoading(false));
      })
      .catch(() => {
        // dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    getList();
    categoryList();
  }, [itemOffset]);

  return (
    <div className="container ">
      <section className="inner-main bg-light">
        <div className="container">
          <div className="row">
            {/*left Side Content*/}
            <div className="col">
              <div className="main-listing">
                <div className="listing-label border-bottom">
                  <h4>
                    Products
                    <span className="text-muted">
                      ({productData.total} Items)
                    </span>
                  </h4>
                  <div className="listing-sort hide-m">
                    <span>Filter by</span>
                    <select
                      className="form-control form-control-sm"
                      id="sorting-select"
                    >
                      {categoryData.length > 0 ? (
                        <>
                          {categoryData.map((item, i) => {
                            return <option key={`cate${i}`}>{item}</option>;
                          })}
                        </>
                      ) : (
                        <option>Select Category</option>
                      )}
                    </select>
                  </div>
                </div>
                <div className="grid-1 inner-product-list-grid">
                  {productData?.products?.length > 0 ? (
                    <>
                      {productData.products.map((item, i) => {
                        return <ProductItem data={item} key={i} />;
                      })}
                    </>
                  ) : (
                    <div> No products found</div>
                  )}
                </div>

                <nav aria-label="Page navigation" className="sec-gap-t">
                  <PaginatedItems
                    itemsPerPage={productData.limit}
                    data={productData}
                    handlePageClick={handlePageClick}
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
