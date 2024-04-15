import HeadphonesLogo from "../assets/HeadphonesLogo"
function PokemonCries({pokemonObj}){
    function playAudioLatest() {
        var audioLatest = new Audio(pokemonObj.cries.latest);
        audioLatest.play();
      }
    
      function playAudioLegacy() {
        var audioLegacy = new Audio(pokemonObj.cries.legacy);
        audioLegacy.play();
      }
    return( 
        <div>
             <h3 className="text-white mt-4">Cries</h3>
             <button className="px-1" onClick={playAudioLatest}>
        <HeadphonesLogo/>
        </button>
        <button className="px-1" onClick={playAudioLegacy}>
        <HeadphonesLogo/>
        </button>
        </div>
    )
}

export default PokemonCries