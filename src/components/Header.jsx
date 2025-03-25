import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-zinc-400 to-transparent bg-blend-soft-light shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
  <span className="text-yellow-300">The</span>  
  <span className="text-rose-200">Story</span>  
  <span className="text-violet-300">Maker</span>
</div>

        {/* Hamburger Button (Only on Small Screens) */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <ul
  className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex space-y-4 md:space-y-0 md:space-x-6 text-center p-6 md:p-0 transition-all duration-300 ${
    menuOpen ? "block" : "hidden"
  } md:flex`}
>
          <li><a href="#home" className="block text-black text-xl font-bold drop-shadow-lg hover:text-blue-300">Home</a></li>
          <li><a href="#about" className="block text-white text-xl font-bold drop-shadow-md hover:text-blue-300">About</a></li>
          <li><a href="#portfolio" className="block text-yellow-300 text-xl font-bold drop-shadow-md hover:text-blue-300">Portfolio</a></li>
          <li><a href="#packages" className="block text-rose-200 text-xl font-bold drop-shadow-md hover:text-blue-300">Packages</a></li>
          <li><a href="#contact" className="block text-violet-300 text-xl font-bold drop-shadow-md hover:text-blue-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
