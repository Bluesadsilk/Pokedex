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
        <div className="justify-center mb-8 items-center">
             <h2 className="text-2xl text-white mt-4 mb-4">Cries</h2>
              <div className="flex flex-row justify-center items-center gap-2">
             <h4>Latest</h4>
             <button className="px-1" onClick={playAudioLatest}>
        <HeadphonesLogo/>
        </button>

        <h4 className="align-middle items-center">Legacy</h4>
        <button className="px-1" onClick={playAudioLegacy}>
        <HeadphonesLogo/>
        </button>
        </div>
        </div>
    )
}

export default PokemonCries