import React from 'react';
import './Pokemon.scss';

function Pokemon({pokemonId, name, abilities, types, weight, imageURL, pokemons}) {
  return (
    <div className="pokemon">
      <div className="container">
        <div className="pokemon__inner">
          <div className="pokemon__info">
            <div className="pokemon__id">id: {pokemonId}</div>
            <div className="pokemon__name">name: {name}</div>
            <div className="pokemon__abilities">abilities: {abilities.join(', ')}</div>
            <div className="pokemon__types">types: {types.join(', ')}</div>
            <div className="pokemon__weight">weight: {weight}</div>
            <div className="pokemon__caught">caught: {pokemons[pokemonId - 1].caught ? String(pokemons[pokemonId - 1].caught) : 'no'}</div>
          </div>
          <div className="pokemon__image">
              <img src={imageURL} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;