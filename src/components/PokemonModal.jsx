import React, { useState, useEffect } from "react";
import { colorByType, colorByStat, statNames } from '../constants/pokemon.js';
import '../App.css';
import HeadphonesLogo from '../assets/HeadphonesLogo.jsx'
import ExitLogo from '../assets/ExitLogo.jsx'
import LoadingAnimation from '../assets/LoadingAnimation.jsx'

function PokemonModal({ pokemonSelected, clearModal }) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  function playAudioLatest() {
    var audioLatest = new Audio(pokemon.cries.latest);
    audioLatest.play();
  }

  function playAudioLegacy() {
    var audioLegacy = new Audio(pokemon.cries.legacy);
    audioLegacy.play();
  }

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
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 rounded-full shadow-lg"
          src={pokemon.sprites.front_default}
          alt="pokemon-sprite"
        />
        <div>
          <h5 className="mb-3 text-5xl font-medium text-gray-900 dark:text-white">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h5>
        </div>
        <div className="text-3xl mb-3 text-gray-500 dark:text-gray-400">
          <h3>#{pokemon.id}</h3>
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

        <div className="flex mt-4 md:mt-6 gap-4 justify-center">
          {pokemon.types.map((subtype, index) => (
            <h4
              key={index}
              className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg ${colorByType[subtype.type.name]}`}
            >
              {subtype.type.name}
            </h4>
          ))}
        </div>
        <h3 className="text-white mt-4">Habilites</h3>
        <div className="flex flex-col">
          {pokemon.abilities.map((ability, indexAb) => (
            <h3
              className="bg-blue-400 py-2 px-2 mb-3 rounded-lg"
              key={indexAb}
            >
              {ability.ability.name.charAt(0).toUpperCase() +
                ability.ability.name.slice(1)}
            </h3>
          ))}
        </div>

        <div>
          <h4 className="font-bold capitalize text-white mb-2">Stats</h4>
          <ul className="flex justify-center gap-3 flex-wrap px-3">
            {pokemon?.stats.map((stat, indexStat) => (
              <li className="p-1 rounded-full" key={indexStat}>
                <div
                  className={`rounded-full w-8 h-8 py-6 px-6 mb-2 aspect-square grid place-content-center ${colorByStat[stat.stat.name]}`}
                >
                  <span className="text-m font-semibol">
                    {" "}
                    {statNames[stat.stat.name]}
                  </span>
                </div>
                <span className={`font-bold text-xm text-white`}>
                  {stat.base_stat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <img src={pokemon.sprites.front_shiny} alt="" />
        <button className="px-1" onClick={playAudioLatest}>
        <HeadphonesLogo/>
        </button>
        <button className="px-1" onClick={playAudioLegacy}>
        <HeadphonesLogo/>
        </button>

        <button className="px-1" onClick={handleModal}>
        <ExitLogo/>
        </button>
      </div>
    </div>
  );
}

export default PokemonModal;
