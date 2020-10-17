import React from 'react';
import './Header.scss';
import githubIcon from '../../images/github-icon.svg';
import githubIconWhite from '../../images/github-icon-white.svg';
import Toggle from 'react-toggle';

const Header = ({ onToggleChangeDarkMode, darkMode }) => (
  <div className="page-header">
    <h2 className="page-header-title">
      <span className="page-header-title-highlight">Issue</span>-Collab
    </h2>
    <div>
      <Toggle
          onChange={onToggleChangeDarkMode}
      /> 
      <span className="toggle-label">dark mode</span>
    </div>
    
    <a
      className="github-link"
      href="https://github.com/trybick/issue-collab"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="github-svg" src={darkMode ? githubIconWhite : githubIcon} alt="github-icon"/>
    </a>
  </div>
);

export default Header;
