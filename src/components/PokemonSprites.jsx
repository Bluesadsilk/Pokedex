function PokemonSprites({pokemonObj}){

    return( 
        <div>
            <h3>Sprites</h3>
        <div className="flex flex-row justify-center items-center">
            
            <div>
                <h3>Back</h3>
                <img className=" rounded-lg" src={pokemonObj.sprites.back_default} alt={pokemonObj.name + "Image"} />
                </div>
            <div/>
            <div>
                <h3>Front</h3>
                <img className=" rounded-lg" src={pokemonObj.sprites.front_default} alt={pokemonObj.name + "Image"} />
                </div>
            <div>
                <h3>Shiny</h3>
                <img className=" rounded-lg" src={pokemonObj.sprites.front_shiny} alt={pokemonObj.name + "Image"} />
                </div>
            
          </div>
          </div>
        
    )
}

export default PokemonSprites