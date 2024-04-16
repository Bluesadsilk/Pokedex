import React from 'react';

function PokemonAtr({ pokemonObj }) {
  return (
      <div className="flex justify-center mb-5 mt-5">
        <h5 className="text-6xl mb-5 mt-2">
          {pokemonObj.name.charAt(0).toUpperCase() + pokemonObj.name.slice(1)} <span className='text-5xl'> #{pokemonObj.id}</span>
        </h5>
    </div>
  );
}

export default PokemonAtr;
