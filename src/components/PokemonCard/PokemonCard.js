import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './PokemonCard.scss';

function PokemonCard(props) {
  const [isCaught, setIsCaught] = useState(false);
  const {id, data} = props;
  let navigate = useNavigate();

  const clickHandler = (e) => {
    if (e.target.classList.contains("card__catchBtn")) {
      setIsCaught(!isCaught);
    } else {
      navigate(`pokemons/${id}`);
    }
  }
  return (
    <div className="card" onClick={clickHandler}>
        <div className="card__id">id: {id}</div>
        <div className="card__name">name: {data.name}</div>
        <button className="card__catchBtn" disabled={isCaught ? true : false}>Catch</button>
    </div>
  );
}

export default PokemonCard;