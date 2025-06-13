import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ReactPixel from "react-facebook-pixel";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize Meta Pixel once
  useEffect(() => {
    ReactPixel.init("YOUR_PIXEL_ID"); // Replace with real ID
    ReactPixel.pageView();
  }, []);

  const trackNavClick = (navItem) => {
    ReactPixel.track("Nav Click", { item: navItem });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>The Story Maker | Crafting Your Brand's Journey</title>
        <meta
          name="description"
          content="The Story Maker creates premium brand stories, visual design, and digital experiences tailored for impact."
        />
        <meta
          name="keywords"
          content="branding, storytelling, design agency, creative portfolio, web development"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="The Story Maker" />
        <meta
          property="og:description"
          content="Your story, beautifully told. Premium storytelling and branding services."
        />
        <meta
          property="og:image"
          content={`${import.meta.env.BASE_URL}assets/Orgilan-01.png`}
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg w-full fixed top-0 left-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Brand Name */}
          <div className="flex items-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}assets/Orgilan-01.png`}
              alt="The Story Maker Logo"
              className="
                h-16 w-auto object-contain rounded-md shadow-sm border border-gray-200
                transition-transform duration-300 ease-in-out
                hover:scale-110 hover:shadow-xl
                cursor-pointer
              "
            />
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-gray-700 to-emerald-600 bg-clip-text text-transparent">
              The<span className="font-black">Story</span>Maker
            </h1>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="block md:hidden text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <ul
            className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex items-center space-y-3 md:space-y-0 md:space-x-6 text-center p-4 md:p-0 transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden"
            } md:flex`}
          >
            {["Home", "About", "Portfolio", "Packages"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setMenuOpen(false);
                    trackNavClick(item);
                  }}
                  className="text-base font-semibold text-gray-800 hover:text-emerald-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
