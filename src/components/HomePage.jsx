import React from 'react';
import Header from './Header.jsx';
import HeroSection from './HeroSection.jsx';
import Portfolio from './Portfolio.jsx';
import Footer from './Footer.jsx';
import PackageSection from './Packages.jsx';
import AboutSection from './About.jsx';
import TreeAnimation from './About.jsx';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Portfolio />
      <TreeAnimation/>
      <PackageSection/>
      <Footer />
    </div>
  );
};

export default HomePage;
