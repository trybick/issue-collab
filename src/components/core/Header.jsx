import React from 'react';
import './Header.scss';
import GitHubButton from 'react-github-btn';

const Header = () => (
  <div className="page-header">
    <h2 className="page-header-title">
      <span className="page-header-title-highlight">Issue</span>-Collab
    </h2>

    <GitHubButton
      href="https://github.com/trybick/issue-collab"
      aria-label="View trybick/issue-collab on GitHub"
    >
      Follow
    </GitHubButton>
  </div>
);

export default Header;
