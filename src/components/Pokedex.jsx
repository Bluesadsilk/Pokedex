import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function Pokedex() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState("ditto");
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
        setLoading(false)
        setError(false)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
      })
  }, [])

  
  return (
    <>
    <h3>Informacion del pokemon:</h3>
    <Pokemon
    pokemon={pokemon}
    loading={loading}
    error={error}
    />
    </>
  )
}

export default Pokedex