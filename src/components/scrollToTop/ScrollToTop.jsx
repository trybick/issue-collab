import React, { Component } from "react";
import { Fab } from '@material-ui/core';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import "./ScrollToTop.scss";

export default class ScrollToTop extends Component {
  constructor(props) {
      super();
    this.state = { isVisible: false };
  }

  componentDidMount() {
    const scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    window.pageYOffset > 500 ? this.setState({ isVisible: true }) : this.setState({ isVisible: false });
  }

  scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }

  render() {
      const { isVisible } = this.state;
      return (
        isVisible &&
        <div className="scroll-to-top" onClick={() => this.scrollToTop()}>
        <Fab color="primary" aria-label="scroll back to top">
          <ArrowUpIcon fontSize="large" />
        </Fab>
        </div>
      );
    }
  }
  