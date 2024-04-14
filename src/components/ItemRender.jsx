import React, {useState} from "react";
import ItemBerrieDiv from './ItemBerrieDiv';
function ItemRender(){

    const [limit, setlimit] = useState(9);
    function isBerrieSelected(){
        setBerrie(true)
    }

  function handleClickLimit(){setlimit(limit+9)}
    return(<>
     <div className='grid grid-cols-3 gap-5 px-2 py-2 mb-2'>
    {[...Array(limit)].map((_, i) => (
      <ItemBerrieDiv key={i} pokemonName={i+1} />
    ))}
    </div>  
    {limit + 9 <= 1025 && (
  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClickLimit}>
    Cargar más
  </button>
)}</>)
}

export default ItemRender;