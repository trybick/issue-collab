import React from 'react';
import './Header.scss';
import githubIcon from '../../images/github-icon.svg';

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
      <img className="github-svg" src={githubIcon} alt="github-icon" />
    </a>
  </div>
);

export default Header;
