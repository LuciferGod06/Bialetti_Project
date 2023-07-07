import React from 'react'
import './pagination.css'
import {Button} from '@chakra-ui/react'
import {ChevronLeftIcon} from '@chakra-ui/icons'


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // Generate an array of page numbers based on the total number of pages
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item${currentPage === number ? ' active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export  {Pagination};
