import React, { useState, useEffect } from 'react';

function PokemonDiv() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/scovillain")
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
      <div className=" inline-block text-5xl bg-slate-300 px-2 py-2 mx-auto my-auto">
      <div className="w-100 h-100 mx-auto my-auto">
        <img className="object-cover w-full h-full" src={pokemon.sprites.front_default} alt="pokemon-sprite" />
      </div>
    
    <div className="flex flex-row mx-auto my-auto">
      <h3>#{pokemon.id}</h3>
      <h3>{pokemon.name}</h3>
    </div>
      
    <div className="flex flex-row mx-auto my-auto gap-5">
      {pokemon.types.map((subtype, index) => (
        <h4 className='border-4 border-black' key={index}>{subtype.type.name}</h4>
      ))}
    </div>
  </div>
  
  );
}

export default PokemonDiv;
