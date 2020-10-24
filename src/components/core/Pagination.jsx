import React from 'react';
import './Pagination.scss';
import Button from '@material-ui/core/Button';

const Pagination = ({ totalPages = 1, currentPage = 1, onPageChange }) => {
  const handleClickPrev = e => {
    const pageNum = currentPage > 1 ? currentPage - 1 : 1;
    onPageChange(e, pageNum);
  };

  const handleClickNext = e => {
    const pageNum = currentPage < totalPages ? currentPage + 1 : totalPages;
    onPageChange(e, pageNum);
  };

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <Button
          color="primary"
          disabled={currentPage === 1}
          onClick={handleClickPrev}
          variant="contained"
        >
          Back
        </Button>
      )}
      <div className="page-count">
        Page {currentPage} of {totalPages.toLocaleString()}
      </div>
      <Button
        color="primary"
        disabled={currentPage === totalPages}
        onClick={handleClickNext}
        variant="contained"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
