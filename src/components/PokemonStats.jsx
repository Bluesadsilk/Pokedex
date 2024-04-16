import { colorByStat, statNames } from '../constants/pokemon.js';
function PokemonStats({pokemonObj}){

    return( 
        <div className='mb-6'>
          
          
          <h4 className="text-2xl font-bold capitalize text-white mb-4 mt-7">Stats</h4>
          <ul className="flex justify-center gap-6 flex-wrap px-3">
            {pokemonObj?.stats.map((stat, indexStat) => (
              <li className="p-1 rounded-full" key={indexStat}>
                <div
                  className={`rounded-full w-10 h-10 py-8 px-8 mb-4 aspect-square grid place-content-center ${colorByStat[stat.stat.name]}`}
                >
                  <span className="text-xl font-semibol">
                    {" "}
                    {statNames[stat.stat.name]}
                  </span>
                </div>
                <span className={`font-bold text-xl text-white p-3`}>
                  {stat.base_stat}
                </span>
              </li>
            ))}
          </ul>
          
        </div>
    )
}

export default PokemonStats