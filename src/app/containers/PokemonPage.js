import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Pokemon from '../components/Pokemon/Pokemon';
import Loader from '../components/Loader/Loader';
import NotFound from '../components/NotFound/NotFound';
import { Context } from './AppState';

function PokemonPage() {
  const { pokemons } = useContext(Context);
  const params = useParams();
  const pokemonId = Number(params.pokemonId);
  const [abilities, setAbilities] = useState([]);
  const [name, setName] = useState('');
  const [types, setTypes] = useState([]);
  const [weight, setWeight] = useState(0);
  const [imageURL, setImageURL] = useState('');
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isEverythingOK, setIsEverythingOK] = useState(true);

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = (url) => {
    axios.get(url)
    .then(res => {
      setAbilities(getAbilities(res.data));
      setName(res.data.name);
      setTypes(getTypes(res.data));
      setWeight(Number(res.data.weight));
      setImageURL(getImageURL(res.data));
      setIsDataLoaded(true);
    })
    .catch(err => {
      setIsEverythingOK(false);
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
    <>
      {
        isEverythingOK ? 
        (isDataLoaded ? 
            <Pokemon  pokemonId={pokemonId}
                      name={name}
                      abilities={abilities}
                      types={types}
                      weight={weight}
                      imageURL={imageURL}
                      pokemons={pokemons}
            /> : 
            <Loader />) :
          <NotFound />
      }
    </>
  );
}

export default PokemonPage;