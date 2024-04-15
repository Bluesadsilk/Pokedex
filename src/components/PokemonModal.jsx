import React, { useState, useEffect } from "react";
import { colorByType, colorByStat, statNames } from '../constants/pokemon.js';
import '../App.css';
import HeadphonesLogo from '../assets/HeadphonesLogo.jsx'
import ExitLogo from '../assets/ExitLogo.jsx'
import LoadingAnimation from '../assets/LoadingAnimation.jsx'
import PokemonTypes from './PokemonTypes.jsx'
import PokemonAbilities from './PokemonAbilities.jsx'
import PokemonStats from './PokemonStats.jsx'
import PokemonCries from './PokemonCries.jsx'
import PokemonSprites from './PokemonSprites.jsx'

function PokemonModal({ pokemonSelected, clearModal }) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  function handleModal() {
    clearModal(false);
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
      });
  }, [pokemonSelected]);

  if (isLoading) {
    return (
      <LoadingAnimation/>
    );
  }

  return (


    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 bg-white border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex">
        <div className="flex flex-col"> 
          <h5 className="mb-3 text-5xl font-medium text-gray-900 dark:text-white">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h5>
        <h3>#{pokemon.id}</h3>
        <PokemonTypes pokemonObj={pokemon}/>
      </div>
     
      <img
          className="mb-3 rounded-full shadow-lg"
          src={pokemon.sprites.front_default}
          alt="pokemon-sprite"
        />
        <button className="px-1" onClick={handleModal}>
        <ExitLogo/>
        </button>
        </div>

      <div className="flex flex-col items-center pb-10">
      
        <div>
         
        </div>
        <div className="text-3xl mb-3 text-gray-500 dark:text-gray-400">
          
        </div>

        <div className="text-white mb-2">
          <h2 className="text-2xl mb-1 text-white">Weight</h2>
          <h3 className="text-2xl text-gray-400">
            {pokemon.weight} <span className="text-xl">LBS</span>{" "}
          </h3>
        </div>

        <div className="text-white mb-2">
          <h2 className="text-2xl mb-1 text-white">Height</h2>
          <h3 className="text-2xl text-gray-400">
            {pokemon.height} <span className="text-xl">FT</span>
          </h3>
        </div>

        <PokemonAbilities pokemonObj={pokemon}/>
       
    
        
      </div>
       
        <PokemonStats pokemonObj={pokemon}/>

        <PokemonCries pokemonObj={pokemon}/>
        
        <PokemonSprites pokemonObj={pokemon}/>
    </div>
  );
}

export default PokemonModal;
