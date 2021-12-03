import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PokemonPage.scss';
import Pokemon from '../Pokemon/Pokemon';
import Loader from '../Loader/Loader';

function PokemonPage() {
  const params = useParams();
  const pokemonId = Number(params.pokemonId);
  const [abilities, setAbilities] = useState([]);
  const [name, setName] = useState('');
  const [types, setTypes] = useState([]);
  const [weight, setWeight] = useState(0);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  }, []);

  const getData = (url) => {
    axios.get(url)
    .then(res => {
      setAbilities(getAbilities(res.data));
      setName(res.data.name);
      setTypes(getTypes(res.data));
      setWeight(res.data.weight);
      setImageURL(getImageURL(res.data));
    })
  }

  const getAbilities = (data) => {
    return data.abilities.map(item => item.ability.name);
  }

  const getTypes = (data) => {
    return data.types.map(item => item.type.name);
  }

  const getImageURL = (data) => {
    return data.sprites.other['official-artwork'].front_default;
  }
  
  return (
    <main className="pokemon">
      <div className="container">
        {(abilities.length && name && types.length && weight && imageURL) ? <Pokemon 
          pokemonId={pokemonId}
          abilities={abilities}
          name={name}
          types={types}
          weight={weight}
          imageURL={imageURL}
        /> :
        <Loader />}
      </div>
    </main>
  );
}

export default PokemonPage;