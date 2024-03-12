import React, { useState, useEffect } from 'react';

function Pokemon({pokemon, loading, error}) {
  
  
  return (
    <>
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_deafult} alt={pokemon.name} />

      <ul></ul>
    </div>
    </>
  )
}

export default Pokemon