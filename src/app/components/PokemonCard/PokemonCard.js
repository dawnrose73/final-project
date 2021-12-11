import React, { useContext } from 'react';
import { Context } from '../../containers/AppState';
import './PokemonCard.scss';

function PokemonCard({ pokemon }) {
  const { clickHandler } = useContext(Context);
  return (
    <div className="card" 
      onClick={clickHandler(pokemon.id)}
      >
      <div className="card__id">id: {pokemon.id}</div>
      <div className="card__name">name: {pokemon.name}</div>
      <button className="card__catchBtn" disabled={pokemon.caught ? true : false}>Catch</button>
    </div>
  );
}

export default PokemonCard;