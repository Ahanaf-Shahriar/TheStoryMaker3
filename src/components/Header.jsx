import React, { useState } from "react";
import ReactPixel from "react-facebook-pixel";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const trackNavClick = (navItem) => {
    ReactPixel.track("Nav Click", { item: navItem });
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-xl w-full fixed top-0 left-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img 
            src={`${import.meta.env.BASE_URL}assets/Orgilan-01.png`} 
            alt="Logo" 
            className="h-16 w-auto object-contain"
          />
          <div className="text-2xl font-bold tracking-wide">
            <span className="text-emerald-700">The</span>
            <span className="text-gray-800">Story</span>
            <span className="text-emerald-700">Maker</span>
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex items-center space-y-2 md:space-y-0 md:space-x-6 text-center p-4 md:p-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          {["Home", "About", "Portfolio", "Packages"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => trackNavClick(item)}
                className="text-base font-semibold text-gray-800 hover:text-emerald-600 transition-all duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
