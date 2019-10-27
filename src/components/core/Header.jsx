import React from 'react';
import './Header.scss';
import icon from '../../images/github-icon.png';

const Header = () => (
  <div className="page-header">
    <h2 className="page-header-title">
      <span className="page-header-title-highlight">Issue</span>-Collab
    </h2>
    <a
      className="github-link"
      href="https://github.com/trybick/issue-collab"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="github-link-icon" src={icon} alt="github-logo" />
    </a>
  </div>
);

export default Header;
