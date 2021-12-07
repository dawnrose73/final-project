import React, { useContext } from 'react';
import './BurgerMenu.scss';
import { MenuContext } from '../../context/NavState';

function BurgerMenu() {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <button className={`header__burger ${isMenuOpen ? 'active' : ''}`}
            aria-label="Открыть главное меню"
            onClick={clickHandler}>
        <span></span>
    </button>
  );
}

export default BurgerMenu;