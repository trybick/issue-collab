import React, { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import ArrowUpIcon from '@mui/icons-material/ArrowUpward';
import './ScrollToTopButton.scss';

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const getShouldShowButton = () => {
    setShowScroll(window.pageYOffset > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', getShouldShowButton);
    return () => {
      window.removeEventListener('scroll', getShouldShowButton);
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

export default ScrollToTopButton;
