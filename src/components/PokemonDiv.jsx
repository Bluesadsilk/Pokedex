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
      
      <>
 <button className="inline-block text-5xl px-2 py-2 mx-auto my-auto border-4 border-blue-200 rounded-lg w-300 h-200">
  <div className="w-full h-100 mx-auto my-auto flex justify-center items-center">
    <img className="object-cover w-250 h-141" src={pokemon.sprites.front_default} alt="pokemon-sprite" />
  </div>

  <div className="flex flex-row mx-auto my-auto justify-center">
    <h3>#{pokemon.id}</h3>
    <h3>{pokemon.name}</h3>
  </div>
    
  <div className="flex flex-row mx-auto my-auto gap-5 justify-center">
    {pokemon.types.map((subtype, index) => (
      <h4 className='bg-lightblue-200 rounded-full px-3 py-1 border-2 border-blue-200' key={index}>{subtype.type.name}</h4>
    ))}
  </div>
</button>




  </>
  
  );
}

export default PokemonDiv;


