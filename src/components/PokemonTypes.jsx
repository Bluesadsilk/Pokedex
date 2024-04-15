import { colorByType } from '../constants/pokemon.js';
function PokemonTypes({pokemonObj}){

    return( <div>
    {pokemonObj.types.map((subtype, index) => (
      <h4
        key={index}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg ${colorByType[subtype.type.name]}`}
      >
        {subtype.type.name}
      </h4>
    ))}
  </div>)
}

export default PokemonTypes