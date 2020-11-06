import React, {useState} from 'react';
import { Fab } from '@material-ui/core';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import "./ScrollToTop.scss";

const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    (window.pageYOffset > 500) ? setShowScroll(true) : setShowScroll(false)
  };
    
  const scrollToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      {showScroll && 
      <div >
      <Fab color="primary" aria-label="scroll back to top">
        <ArrowUpIcon fontSize="large" />
      </Fab>
      </div>}
    </div>
  );
}

export default ScrollArrow;