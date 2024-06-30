import React from 'react';

function Pagination({ currentPage, totalPages, paginate }) {
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a
            className='page-link'
            href='#'
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
          >
            <a
              className='page-link'
              href='#'
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
        >
          <a
            className='page-link'
            href='#'
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
