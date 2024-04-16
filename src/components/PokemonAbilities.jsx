function PokemonAbilities({pokemonObj}){

    return( 
        <div>
             <h3 className="text-white mt-4 mb-5 text-2xl items-center">Abilites</h3>
        <div className="flex flex-row gap-x-3 justify-center items-center">
          {pokemonObj.abilities.map((ability, indexAb) => (
            <h3
              className="bg-blue-400 py-2 px-2 mb-3 rounded-lg m-auto"
              key={indexAb}
            >
              {ability.ability.name.charAt(0).toUpperCase() +
                ability.ability.name.slice(1)}
            </h3>
          ))}
        </div></div>
    )
}

export default PokemonAbilities