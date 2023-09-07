import React from 'react'

// export function Pagination({ goToNextPage, goToPreviousPage }){
//     return (
//         //check if there is a prev/next page and if so display button
//         <div>
//             {goToPreviousPage && <button onClick={goToPreviousPage}>Previous</button>}
//             {goToNextPage && <button onClick={goToNextPage}>Next</button>}
//         </div>
//     )
// }

function Pagination(props) {
    return (
      <div className="pagination">
        <button
          onClick={props.onPrevPage}
          disabled={props.currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {props.currentPage} of {props.totalPages}
        </span>
        <button
          onClick={props.onNextPage}
          disabled={props.currentPage === props.totalPages}
        >
          Next
        </button>
      </div>
    );
  }
  
  export default Pagination;