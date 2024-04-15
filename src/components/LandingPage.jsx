import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import SearchBar from './SearchBar';
import SearchContent from './SearchContent';
import ItemRender from './ItemHome';
import BerrieRender from './BerrieRender';

function LandingPage() {
  const [navSearchIsEmpty, setNavSearch] = useState(true);
  const [navBarContent, setNavContent] = useState(null);
  const [url, setUrl] = useState(window.location.href);

  useEffect(() => {
    const handleUrlChange = () => {
      setUrl(window.location.href);
    };

    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  return (
    <>
      <div>
        <div></div>
        <div className='flex flex-col items-center justify-center'>
          <div className='grid grid-cols-3 justify-center mb-10 items-center gap-5'>
            <NavBar />
            <img className='w-60 h-30 object-center' src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png" alt="logo-pokedex" />
            <SearchBar setEmpty={setNavSearch} setContent={setNavContent} />
          </div>
        </div>
      </div>
      {navSearchIsEmpty && url.endsWith("items") && <ItemRender />}
      {navSearchIsEmpty && url.endsWith("berries") && <BerrieRender />}
      {navSearchIsEmpty && url.endsWith("#") && <Home/>}
      {!navSearchIsEmpty && <SearchContent userInput={navBarContent} />}
    </>
  );
}

export default LandingPage;
