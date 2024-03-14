import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import SearchBar from './SearchBar';
function Pokedex() {

  
  
  
  return (
    <>
    <div>
      <div></div>
      <div className='flex flex-col items-center justify-center'>
  <div className='grid grid-cols-3 justify-center mb-10 items-center gap-5'>
    <NavBar/>
    <img className='w-60 h-30 object-center' src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png" alt="logo-pokedex" />
    <SearchBar/>
  </div>
</div>
    </div>
    <Home/>
    </>
  )
}

export default Pokedex