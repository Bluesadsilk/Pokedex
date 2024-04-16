import { colorByType } from '../constants/pokemon.js';
function PokemonTypes({pokemonObj}){

    return( <div>
      <h3 className="text-2xl text-white mt-4 mb-4">Type</h3>
      <div className='flex gap-x-4'>
    {pokemonObj.types.map((subtype, index) => (
      <h4
        key={index}
        className={`items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg ${colorByType[subtype.type.name]}`}
      >
        {subtype.type.name}
      </h4>
    ))}
    </div>
  </div>)
}

export default PokemonTypes