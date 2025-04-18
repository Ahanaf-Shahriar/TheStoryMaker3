import React, { useState } from "react";
import ReactPixel from "react-facebook-pixel";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to track navigation clicks
  const trackNavClick = (navItem) => {
    ReactPixel.track("Nav Click", { item: navItem });
  };

  return (
    <header className="bg-[#F5E1C8] from-zinc-400 to-transparent bg-blend-soft-light shadow-md  w-full top-0 left-0 z-50">
      <nav className="container mx-auto px-3 py-1 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img 
            src="/assets/Orgilan-01.png" 
            alt="Logo" 
            className="h-16 w-auto object-contain"
          />
          <div className="text-lg font-bold">
            <span className="text-green-800">The</span>  
            <span className="text-white">Story</span>  
            <span className="text-green-800">Maker</span>
          </div>
        </div>

        {/* Hamburger Button (Only on Small Screens) */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-12 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex space-y-1 md:space-y-0 md:space-x-3 text-center p-3 md:p-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li><a href="#home" onClick={() => trackNavClick("Home")} className="block text-green-700 text-base font-bold drop-shadow-lg hover:text-blue-300">Home</a></li>
          <li><a href="#about" onClick={() => trackNavClick("About")} className="block text-black text-base font-bold drop-shadow-md hover:text-blue-300">About</a></li>
          <li><a href="#portfolio" onClick={() => trackNavClick("Portfolio")} className="block text-green-700 text-base font-bold drop-shadow-md hover:text-blue-300">Portfolio</a></li>
          <li><a href="#packages" onClick={() => trackNavClick("Packages")} className="block text-black text-base font-bold drop-shadow-md hover:text-blue-300">Packages</a></li>
          <li><a href="#contact" onClick={() => trackNavClick("Contact")} className="block text-green-700 text-base font-bold drop-shadow-md hover:text-blue-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
