function PokemonSprites({pokemonObj}){

    return( 
        <div>
            <img src={pokemonObj.sprites.front_shiny} alt={pokemonObj.name + "Image"} />
          </div>
    )
}

export default PokemonSprites