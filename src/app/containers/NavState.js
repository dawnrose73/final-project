import React, { createContext, useState } from 'react';

export const MenuContext = createContext({
    isMenuOpen: true,
    toggleMenu: () => {},
});
  
function NavState({ children }) {
    const [isMenuOpen, toggleMenu] = useState(false);

    const toggleMenuMode = () => {
        toggleMenu(!isMenuOpen);
    }
    
    return (
        <MenuContext.Provider value={{isMenuOpen, toggleMenuMode}}>{children}</MenuContext.Provider>
    );
};

export default NavState;