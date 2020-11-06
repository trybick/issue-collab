import React, { useEffect, useState } from 'react';
import { Fab } from '@material-ui/core';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import './ScrollToTop.scss';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    window.pageYOffset > 500 ? setShowScroll(true) : setShowScroll(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      {showScroll && (
        <div>
          <Fab aria-label="scroll back to top" color="primary">
            <ArrowUpIcon fontSize="large" />
          </Fab>
        </div>
      )}
    </div>
  );
};

export default ScrollArrow;
