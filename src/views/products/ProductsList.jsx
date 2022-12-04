import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductList } from "../../store/_actions/ProductAction";
import PaginatedItems from "../../components/Paginations/pagination";
import ProductItem from "./ProductItem";

export default function ProductsList() {
  const dispatch = useDispatch();
  const [productData, setProducts] = useState({
    total: 0,
    page: 10,
    skip: 0,
    limit: 10,
    products: [],
  });
  //const productReducers = useSelector(state => state.ProductReducers);
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
  useEffect(() => {
    getList();
  }, [itemOffset]);

  return (
    <div className="container ">
      <section className="sec-innerContent">
        <div className="innerContentBody">
          <div className="row row-cols-2 row-cols-lg-3 g-0 g-md-2 g-lg-3">
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
          <div className="p-4 text-center">
            <PaginatedItems
              itemsPerPage={productData.limit}
              data={productData}
              handlePageClick={handlePageClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
