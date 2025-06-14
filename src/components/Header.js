import React from 'react';
import '../css/Header.css';

const Header = () => (
  <header className="header">
    <div className="header-left">DEMO Streaming</div>
    <div className="header-right">
      <button className="login-btn">Log in</button>
      <button className="trial-btn">Start your free trial</button>
    </div>
  </header>
);

export default Header;
