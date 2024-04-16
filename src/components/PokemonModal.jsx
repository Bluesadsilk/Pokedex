import React, { useState, useEffect } from "react";
import '../App.css';
import ExitLogo from '../assets/ExitLogo.jsx'
import PokemonAtr from './PokemonAtr.jsx';
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
      <div className="flex flex-row justify-center">
        <PokemonAtr pokemonObj={pokemon}/>         
        <button className="align-right" onClick={handleModal}>
        <ExitLogo/>
        </button>
        </div>
        

        <div className="flex flex-row justify-center gap-10">  
          <div className="flex flex-col justify-center items-center mb-5 gap-10">
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
          </div>
          <PokemonTypes pokemonObj={pokemon}/>
        <PokemonAbilities pokemonObj={pokemon}/>
        </div>
        <PokemonSprites pokemonObj={pokemon}/>
        <PokemonCries pokemonObj={pokemon}/>
        <PokemonStats pokemonObj={pokemon}/>

        
        
        

    </div>
  );
}

export default PokemonModal;
