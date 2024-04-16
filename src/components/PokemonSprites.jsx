function PokemonSprites({pokemonObj}){

    return( 
        <div className="justify-center">
            <h3 className="text-3xl justify-center mb-5">Sprites</h3>
        <div className="flex flex-row justify-center items-center">
            
            <div className="justify-center items-center m-5">
                <h3 className="text-2xl">Back</h3>
                <img className="justify-center rounded-lg" src={pokemonObj.sprites.back_default} alt={pokemonObj.name + "Image"} />
                </div>
            
            <div className="justify-center items-center  m-5">
                <h3 className="text-2xl">Front</h3>
                <img className=" rounded-lg" src={pokemonObj.sprites.front_default} alt={pokemonObj.name + "Image"} />
                </div>
            <div className="justify-center items-center  m-5">
                <h3 className="text-2xl">Shiny</h3>
                <img className=" rounded-lg" src={pokemonObj.sprites.front_shiny} alt={pokemonObj.name + "Image"} />
                </div>
                <div/>
            
          </div>
          </div>
        
    )
}

export default PokemonSprites