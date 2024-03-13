import React from 'react';
import './App.css'

import PokemonDiv from './components/PokemonDiv';
import NavBar from './components/NavBar';
function App() {

   
  
  return (
    <> <div>
      <div></div>
    <div className='grid grid-cols-3 justify-center'>
      <NavBar/>
      <h1>Pokedex</h1>
      <input type="text" />
      </div>
    
    <div className='grid grid-cols-3 gap-5 px-2 py-2 mb-2'>
    {[...Array(12)].map((_, i) => (
      <PokemonDiv key={i} pokemonName={``} />
    ))}
    </div>
    <button className='border-4 border-black p-2'>Cargar mas</button>
    </div>
   
  
    </>
  )
}

export default App
