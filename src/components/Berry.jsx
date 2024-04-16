import React, { useState, useEffect } from 'react';
import LoadingLogo from '../assets/LoadingAnimation';

function ItemBerrieDiv({ berryName }) {
  const [isLoading, setIsLoading] = useState(true);
  const [berry, setBerry] = useState(null);
  const [berryImage, setBerryImage] = useState(null);
  const [itemUrl, setItemUrl] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/berry/${berryName}`)
      .then((response) => response.json())
      .then((data) => {
        setBerry(data);
        setIsLoading(false);
        // Si existe un objeto "item" dentro de la respuesta, actualiza el estado de la URL del objeto berry.item.url
        if (data.item && data.item.url) {
          setItemUrl(data.item.url);
        }
      })
      .catch((error) => console.error('Error fetching berry:', error));
  }, [berryName]);


  useEffect(() => {
    if (itemUrl) {
      fetch(itemUrl)
        .then((response) => response.json())
        .then((data) => {
          // Actualiza el estado de la imagen de la baya con la URL de la imagen del objeto
          setBerryImage(data.sprites.default);
        })
        .catch((error) => console.error('Error fetching item:', error));
    }
  }, [itemUrl]);



  if (isLoading) {
    return <LoadingLogo />;
  }

  return (
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center items-center">
<div className="flex flex-col items-center pb-10"> 
<img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={berryImage} alt={berry.name}/>
<h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{berry.name}</h3> 
<h3 className="text-sm text-gray-500 dark:text-gray-400">#{berry.id} 
</h3>

</div>
</div>
  );
}

export default ItemBerrieDiv;
