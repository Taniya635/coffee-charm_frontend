import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'






const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          bg={currentPage === pageNumber ? '#15b9dd' : 'gray.300'}
          color={currentPage === pageNumber ? 'white' : 'black'}
          margin='0.5rem'
          disabled={currentPage === 1 && pageNumber === 1 || currentPage === totalPages && pageNumber === totalPages}
        
        >
          {pageNumber}
        </Button>
      ))}
    </div>
  )
}

export default Pagination