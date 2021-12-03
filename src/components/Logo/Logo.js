import React from 'react';
import './Logo.scss';
import pokeballImage from '../../img/pokeball.png';

function Logo() {
  return (
    <div className="logo">
        <img src={pokeballImage} alt=""></img>
        <div>POKEDEX</div>
    </div>
  );
}

export default Logo;