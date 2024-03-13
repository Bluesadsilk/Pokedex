import React, { useState, useEffect } from 'react';
import PokemonDiv from './PokemonDiv';
import NavBar from './NavBar';
function Pokedex() {

  const [limit, setlimit] = useState(12);

  function handleClickLimit(){setlimit(limit+12)}
  
  
  return (
    <>
    <div>
      <div></div>
    <div className='grid grid-cols-3 justify-center'>
      <NavBar/>
      <h1>Pokedex</h1>
      <input type="text" />
      </div>
    
    <div className='grid grid-cols-3 gap-5 px-2 py-2 mb-2'>
    {[...Array(limit)].map((_, i) => (
      <PokemonDiv key={i} pokemonName={i+1000} />
    ))}
    </div>
    {limit + 12 <= 1025 && (
  <button className='border-4 border-black p-2' onClick={handleClickLimit}>
    Cargar más
  </button>
)}

    </div>
    </>
  )
}

export default Pokedex