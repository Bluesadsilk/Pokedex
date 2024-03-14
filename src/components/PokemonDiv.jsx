import React, { useState, useEffect } from 'react';

function PokemonDiv({pokemonName}) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h3>Cargando...</h3>
      </div>
    );
  }

    return (
      
      <div>
        

<button className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
      
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={pokemon.sprites.front_default} alt="pokemon-sprite"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{pokemon.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400"><h3>#{pokemon.id}</h3></span>
        <div className="flex mt-4 md:mt-6 gap-4">
        {pokemon.types.map((subtype, index) => (
      <h4 href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"key={index}>{subtype.type.name}</h4>
    ))}
           
        </div>
    </div>
</button>

 <button>
    
    
  
  
    
  
  
  
</button>




  </div>
  
  );
}

export default PokemonDiv;


