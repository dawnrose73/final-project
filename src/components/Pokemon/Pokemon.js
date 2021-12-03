import React from 'react';
import './Pokemon.scss';

function Pokemon(props) {
    const {pokemonId, abilities, name, types, weight, imageURL} = props;
  return (
    <div className="pokemon__inner">
        <div className="pokemon__info">
        <div className="pokemon__id">id: {pokemonId}</div>
        <div className="pokemon__name">name: {name}</div>
        <div className="pokemon__abilities">abilities: {abilities.join(', ')}</div>
        <div className="pokemon__types">types: {types.join(', ')}</div>
        <div className="pokemon__weight">weight: {weight}</div>
        {/* <div className="pokemon__caught">caught: {isCaught ? date : 'no'}</div> */}
        </div>
        <div className="pokemon__image">
        <img src={imageURL} alt="pokemon" />
        </div>
    </div>
  );
}

export default Pokemon;