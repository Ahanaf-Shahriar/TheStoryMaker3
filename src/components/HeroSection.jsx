import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  return (
    <section className="hero-section relative" id="home">
      {/* Background image */}
      <div className="hero-background relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={backgrounds[index]}
            alt="Photography background - The Story Maker"
            className="absolute w-full h-full object-cover"
            initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {/* Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/15 z-10"></div>

      {/* Text Content with animation */}
      <motion.div
  className="hero-content absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
>
  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
    <span className="text-white">Capturing moments,</span>{' '}
    <span className="text-green-800">weaving stories.</span>
  </h1>

  <motion.p
    className="text-lg md:text-xl max-w-2xl"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
  >
    <span className="text-green-800 font-extrabold">The Story Maker</span>
    <span className="text-white font-bold"> — Your trusted visual storyteller since 2019.</span>
  </motion.p>
</motion.div>

    </section>
  );
};

export default HeroSection;
