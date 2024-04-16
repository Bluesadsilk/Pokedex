
function PokemonAtr({pokemonObj}){

    return(<div className="flow flow-col mx-5 my-5"><h5 className="text-5xl mb-5">
    {pokemonObj.name.charAt(0).toUpperCase() + pokemonObj.name.slice(1)}
    </h5>
    <h3 className="text-3xl">#{pokemonObj.id}</h3>
    
    </div>)
}

export default PokemonAtr