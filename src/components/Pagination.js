import React from "react";

function Pagination({
  totalPages,
  handleClick,
  

  page,
  setPage,
}) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
 
  const previousPage = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };
  const nextPage = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div id="paginate" style={{ width: "fit-content", margin: "auto" }}>
      <button
        className="buttons"
        style={{ height: "30px", width: "50px" }}
        onClick={(e)=>{handleClick("prev")}}
        
        disabled={page === 1}
      >
        Prev
      </button>

      <button
        className="buttons"
        style={{ height: "30px", width: "50px" }}
        onClick={(e)=>{handleClick("next")}}
        disabled={page === 5}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;