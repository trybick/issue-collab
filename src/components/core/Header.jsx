import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import './Header.scss';
import githubIcon from '../../images/github-icon.svg';
import githubIconWhite from '../../images/github-icon-white.svg';

const Header = ({ onToggleDarkMode, darkMode }) => (
  <div className="page-header">
    <h2 className="page-header-title">
      <span className="page-header-title-highlight">Issue</span>-Collab
    </h2>

    <div className="header-right">
      <DarkModeToggle
        checked={darkMode}
        className="dark-mode-toggle"
        onChange={onToggleDarkMode}
        size={42}
      />
      <a
        className="github-link"
        href="https://github.com/trybick/issue-collab"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="github-icon"
          className="github-svg"
          src={darkMode ? githubIconWhite : githubIcon}
        />
      </a>
    </div>
  </div>
);

export default Header;
