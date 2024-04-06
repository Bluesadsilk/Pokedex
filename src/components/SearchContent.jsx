import React, { useState, useEffect } from 'react';
import PokemonDiv from './PokemonDiv';

function SearchContent({ userInput }) {
  const [searchResults, setSearchResults] = useState([]);
  const [limit, setLimit] = useState(9);

  useEffect(() => {
    if (userInput.trim() === '') {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results);
        })
        .catch(error => console.error('Error fetching Pokemon data:', error));
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${userInput.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
          if (!data.detail) {
            setSearchResults([data]);
          } else {
            setSearchResults([]);
          }
        })
        .catch(error => console.error('Error fetching Pokemon details:', error));
    }
  }, [userInput, limit]);

  const canLoadMore = searchResults.length < limit; // Determina si quedan más Pokémon para cargar

  return (
    <>
      <div className='grid grid-cols-3 gap-5 px-2 py-2 mb-2'>
        {searchResults.map((pokemon, index) => (
          <div key={index}>
            <PokemonDiv pokemonName={pokemon.name} />
          </div>
        ))}
      </div>
      {canLoadMore && (
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setLimit(prevLimit => prevLimit + 9)}>Cargar más</button>
      )}
    </>
  );
}

export default SearchContent;
