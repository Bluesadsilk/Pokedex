import React, { useState, useEffect } from 'react';
import PokemonDiv from './PokemonDiv';
import NavBar from './NavBar';
function Pokedex() {

  const [limit, setlimit] = useState(9);

  function handleClickLimit(){setlimit(limit+9)}
  
  
  return (
    <>
    <div>
      <div></div>
      <div className='flex flex-col items-center justify-center'>
  <div className='grid grid-cols-3 justify-center mb-10 items-center gap-5'>
    <NavBar/>
    <img className='w-60 h-30 object-center' src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png" alt="logo-pokedex" />
    <input className='w-50 h-10' type="text" />
  </div>
</div>

    
    <div className='grid grid-cols-3 gap-5 px-2 py-2 mb-2'>
    {[...Array(limit)].map((_, i) => (
      <PokemonDiv key={i} pokemonName={i+1} />
    ))}
    </div>  
    {limit + 9 <= 1025 && (
  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClickLimit}>
    Cargar más
  </button>
)}

    </div>
    </>
  )
}

export default Pokedex