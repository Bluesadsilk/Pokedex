import React, { useState, useEffect } from 'react';
import PokemonModal from './PokemonModal';
import { colorByType } from '../constants/pokemon.js';
import LoadingAnimation from '../assets/LoadingAnimation.jsx'
import '../App.css';


function PokemonDiv({ pokemonName }) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [isClicked, setClick] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isClicked) {
      showPokemonModal();
    } else {
      setModalComponent(null);
    }
  }, [isClicked, pokemon]);

  function showPokemonModal() {
    setModalComponent(<PokemonModal pokemonSelected={pokemon.name} clearModal={clearModal} />);
  }

  function showModal() {
    setClick(true);
  }

  function clearModal() {
    setClick(false);
  }

  if (isLoading) {
    return (
      <LoadingAnimation/>
    );
  }

  return (
    <div>
      <button onClick={showModal} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center items-center font-sans">
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={pokemon.sprites.front_default} alt="pokemon-sprite" />
          <h5 className="mb-1">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
          <span className=""><h3>#{pokemon.id}</h3></span>
          <div className="flex mt-4 md:mt-6 gap-4">
            {pokemon.types.map((subtype, index) => (
              <h4
                key={index}
                className={`inline-flex items-center px-4 py-2 text-center rounded-lg ${colorByType[subtype.type.name]} `}
              >
                {subtype.type.name.charAt(0).toUpperCase() + subtype.type.name.slice(1)}
              </h4>
            ))}
          </div>
        </div>
      </button>
      {modalComponent}
    </div>
  );
}

export default PokemonDiv;
