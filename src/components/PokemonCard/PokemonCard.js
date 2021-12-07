import React from 'react';
import './PokemonCard.scss';

function PokemonCard({pokemon, clickHandler}) {
  return (
    <div className="card" onClick={clickHandler(pokemon.id)}>
        <div className="card__id">id: {pokemon.id}</div>
        <div className="card__name">name: {pokemon.name}</div>
        <button className="card__catchBtn" disabled={pokemon.caught ? true : false}>Catch</button>
    </div>
  );
}

export default PokemonCard;