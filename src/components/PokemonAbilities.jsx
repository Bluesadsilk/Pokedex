function PokemonAbilities({pokemonObj}){

    return( 
        <div>
             <h3 className="text-white mt-4">Habilites</h3>
        <div className="flex flex-col">
          {pokemonObj.abilities.map((ability, indexAb) => (
            <h3
              className="bg-blue-400 py-2 px-2 mb-3 rounded-lg"
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