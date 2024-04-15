import React, { useState, useEffect } from 'react';
import LoadingLogo from '../assets/LoadingAnimation';

function ItemBerrieDiv({ berryName }) {
  const [isLoading, setIsLoading] = useState(true);
  const [berry, setBerry] = useState(null);
  const [isClicked, setClick] = useState(false);
  const [berryImage, setBerryImage] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/berry/${berryName}`)
      .then((response) => response.json())
      .then((data) => {
        setBerry(data);
        setIsLoading(false);
        setBerryImage(data.sprites.default); // Update to correct image URL
      })
      .catch((error) => console.error('Error fetching berry:', error));
  }, [berryName]);

  function showModal() {
    setClick(!isClicked); // Simplified toggle logic
  }

  if (isLoading) {
    return <LoadingLogo />;
  }

  return (
    <div>
      <h2>{berry.name}</h2>
      <h2>{berry.id}</h2>
      <img src={berryImage} alt={berry.name} />
      <h2>{berry.size}</h2>
      <h2>{berry.natural_gift_power}</h2>
      <h2>{berry.natural_gift_type.name}</h2>
      <h2>{berry.growth_time}</h2>
      <h2>{berry.max_harvest}</h2>
    </div>
  );
}

export default ItemBerrieDiv;
