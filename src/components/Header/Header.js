import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <Logo />
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;