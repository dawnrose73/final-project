import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { MenuContext } from '../../context/NavState';
import './Navigation.scss';

function Navigation() {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <nav className={`header__navigation ${isMenuOpen ? 'active' : ''}`}>
      <ul className="header__links">
        <li>
          <Link to="/" className="header__nav-link" onClick={clickHandler}>Pokemon list</Link> 
        </li>
        <li>
          <Link to="/caught" className="header__nav-link" onClick={clickHandler}>Caught pokemons</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;