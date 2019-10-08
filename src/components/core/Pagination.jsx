import React from 'react';
import Button from './Button';
import '../../styles/Pagination.scss';

const Pagination = ({ totalPage = 1, currentPage = 1, onPageChange = () => {} }) => {
  const handleClickPrev = e => {
    const pageNum = currentPage > 1 ? currentPage - 1 : 1;
    onPageChange(e, pageNum);
  };

  const handleClickNext = e => {
    const pageNum = currentPage < totalPage ? currentPage + 1 : totalPage;
    onPageChange(e, pageNum);
  };

  return (
    <div className="pagination">
      <Button onClick={handleClickPrev} disabled={currentPage === 1}>
        Previous
      </Button>
      <Button onClick={handleClickNext} disabled={currentPage === totalPage}>
        Next
      </Button>
      <span className="pagination-pages">
        Page {currentPage} of {totalPage}
      </span>
    </div>
  );
};

export default Pagination;
