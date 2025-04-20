import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HeroSection.css';

const backgrounds = [
  `${import.meta.env.BASE_URL}assets/cover1.jpg`,
  `${import.meta.env.BASE_URL}assets/cover2.jpg`,
  `${import.meta.env.BASE_URL}assets/cover3.jpg`,
  `${import.meta.env.BASE_URL}assets/cover4.jpg`
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change background every 3 seconds

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-background relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={backgrounds[index]}
            alt="Background"
            className="absolute w-full h-full object-cover"
            initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white" onClick={prevSlide}>
          <FaChevronLeft size={24} />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white" onClick={nextSlide}>
          <FaChevronRight size={24} />
        </button>
      </div>
      <div className="hero-content absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold">Your Dream Wedding, Captured Beautifully</h1>
        <p className="text-lg mt-2">Discover unforgettable moments with us.</p>
      </div>
    </section>
  );
};

export default HeroSection;
