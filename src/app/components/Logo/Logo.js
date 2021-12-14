import React from 'react';
import './Logo.scss';
import pokeballImage from '../../../img/pokeball.png';

function Logo() {
    return (
        <div className="logo">
            <img src={pokeballImage} alt=""></img>
            <span>POKEDEX</span>
        </div>
    );
}

export default Logo;