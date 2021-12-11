import React, { useContext } from 'react';
import './BurgerMenu.scss';
import { MenuContext } from '../../containers/NavState';

function BurgerMenu() {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  const clickHandler = () => {
    toggleMenuMode();
  };
  return (
    <button className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
            onClick={clickHandler}>
        <span></span>
    </button>
  );
}

export default BurgerMenu;