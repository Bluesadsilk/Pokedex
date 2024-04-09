import React, { useState, useEffect } from 'react';
import PokemonDiv from './PokemonDiv';

function SearchContent({ userInput }) {
  const [searchResults, setSearchResults] = useState([]);
  const [limit, setLimit] = useState(9);
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
      .then(response => response.json())
      .then(data => {
        setAllPokemon(data.results);
      })
      .catch(error => console.error('Error fetching Pokemon data:', error));
  }, []);


  useEffect(() => {
    if (userInput.trim() === '') {
      setSearchResults([]);
    } else {
      const filteredPokemon = allPokemon.filter(pokemon =>
        pokemon.name.includes(userInput.toLowerCase())
      );
      setSearchResults(filteredPokemon);
    }
  }, [userInput, allPokemon]);
  function handleClick(){
    setLimit(limit+9)
  }

  const canLoadMore = searchResults.length >= limit + 9;

  return (
    <>
      <div className='grid grid-cols-3 gap-5 px-2 py-2 mb-2'>
        {searchResults.slice(0, limit).map((pokemon, index) => (
          <div key={index}>
            <PokemonDiv pokemonName={pokemon.name} />
          </div>
        ))}
      </div>

      { canLoadMore &&(
  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={(handleClick)}>
    Cargar más
  </button>
)}
    </>
  );
}

export default SearchContent;
