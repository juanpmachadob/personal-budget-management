import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Paginator = ({
  itemsCount = 0,
  itemsPerPage = 10,
  callbackOnPageChange,
}) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(itemsCount / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemsCount;
    setItemOffset(newOffset);
    callbackOnPageChange(newOffset + 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="paginator"
        pageClassName="paginator__page-item"
        pageLinkClassName="paginator__page-link"
        previousClassName="paginator__page-item"
        previousLinkClassName="paginator__page-link"
        nextClassName="paginator__page-item"
        nextLinkClassName="paginator__page-link"
        breakClassName="paginator__page-item paginator__page-item--break"
        breakLinkClassName="paginator__page-link paginator__page-link--break"
        containerClassName="paginator__pagination"
        activeClassName="paginator__page-item paginator__page-item--active"
        activeLinkClassName="paginator__page-link paginator__page-link--active"
      />
    </>
  );
};
export default Paginator;
