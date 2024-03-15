import React from "react";
import ReactPaginate from "react-paginate";

const PaginationButtons = ({pageCount, handlePageChange}) => {
  return pageCount!=1?(
    <div>
      <ReactPaginate
        previousLabel={"< Previous"}
        pageCount={pageCount}
        nextLabel={"Next >"}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={
          "flex justify-center font-semibold text-gray-400 select-none"
        }
        pageClassName={
          "mx-1 px-3 py-1 rounded-md hover:bg-gray-200 justify-center items-center"
        }
        pageLinkClassName={"p-1 justify-center items-center"}
        previousClassName={"mx-1 px-3 py-1"}
        previousLinkClassName={"p-2 rounded-lg  hover:bg-gray-200"}
        nextClassName={"mx-1 px-3 py-1"}
        nextLinkClassName={"p-2  rounded-lg hover:bg-gray-200"}
        breakClassName={"mx-1 px-1 py-1 rounded-md"}
        breakLinkClassName={"p-2 rounded-lg hover:bg-gray-200"}
        activeClassName={"bg-purple-300 text-white hover:bg-purple-400"}
      />
    </div>
  ):null;
};

export default PaginationButtons;
