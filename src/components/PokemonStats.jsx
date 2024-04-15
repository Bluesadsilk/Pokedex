import { colorByStat, statNames } from '../constants/pokemon.js';
function PokemonStats({pokemonObj}){

    return( 
        <div>
          
          
          <h4 className="font-bold capitalize text-white mb-2">Stats</h4>
          <ul className="flex justify-center gap-3 flex-wrap px-3">
            {pokemonObj?.stats.map((stat, indexStat) => (
              <li className="p-1 rounded-full" key={indexStat}>
                <div
                  className={`rounded-full w-8 h-8 py-6 px-6 mb-2 aspect-square grid place-content-center ${colorByStat[stat.stat.name]}`}
                >
                  <span className="text-m font-semibol">
                    {" "}
                    {statNames[stat.stat.name]}
                  </span>
                </div>
                <span className={`font-bold text-xm text-white`}>
                  {stat.base_stat}
                </span>
              </li>
            ))}
          </ul>
          
        </div>
    )
}

export default PokemonStats