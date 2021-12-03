import React, { useState, useEffect } from 'react';
import './PokemonList.scss';
import axios from 'axios';
import PokemonCard from '../PokemonCard/PokemonCard';
import Loader from '../Loader/Loader';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]); 
  // const [nextPage, setNextPage] = useState('');
  // const [fetching, setFetching] = useState(false);
  // const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getData('https://pokeapi.co/api/v2/pokemon');
  }, []);

//   useEffect(() => {
//       if (fetching) {
//           getData(nextPage);
//       }
//   }, [fetching]);

  const getData = (url) => {
    axios.get(url)
    .then(res => {
        setPokemons([...pokemons, ...res.data.results]); 
        // setNextPage(res.data.next);
        // setTotalCount(res.data.count); 
        
    })
  //   .finally(() => {
  //       setFetching(false);    
  //   });
  }

//   useEffect(() => {
//       document.addEventListener('scroll', scrollHandler);
//       return function() {
//           document.removeEventListener('scroll', scrollHandler);
//       }
//   }, []);



//   const scrollHandler = (e) => {
//       if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
//           setFetching(true);
//       }
//   }
    
  return (
    <main className="pokemonlist">
        <div className="container">
            <div className="pokemonlist__inner">
              {pokemons.length ? pokemons.map((pokemon, index) => <PokemonCard id={index + 1} data={pokemon} key={index + 1} />) : <Loader />}
            </div>
        </div>
    </main>
  );
}
  
export default PokemonList;