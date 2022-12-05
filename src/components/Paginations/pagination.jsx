import React from "react";
import ReactPaginate from "react-paginate";

function PaginatedItems({ data, itemsPerPage, handlePageClick }) {
  const pageCount = Math.ceil(data.total / itemsPerPage);

  return (
    <>
      {data?.total > 0 && (
        <div className="table_pagination col-md-12">
          <ul className="pagination float-right">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName="pagination pagination-borderless justify-content-center"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              activeClassName="active"
            />
          </ul>
        </div>
      )}
    </>
  );
}

export default PaginatedItems;
