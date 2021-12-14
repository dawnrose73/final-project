import { NavLink } from "react-router-dom";
import React, { useContext } from 'react';
import { MenuContext } from '../../containers/NavState';
import './Navigation.scss';

function Navigation() {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    const clickHandler = () => {
        toggleMenuMode();
    };
    return (
        <nav className={`header__navigation ${isMenuOpen ? 'header__navigation--active' : ''}`}>
            <ul className="header__nav-links">
                <li>
                    <NavLink to="/" className="header__nav-link" onClick={clickHandler}>Pokemon list</NavLink> 
                </li>
                <li>
                    <NavLink to="/caught" className="header__nav-link" onClick={clickHandler}>Caught pokemons</NavLink> 
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;