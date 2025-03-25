import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const imageSets = [
  ["/assets/Portfolio1.jpg", "/assets/Portfolio2.jpg", "/assets/Portfolio3.jpg"], 
  ["/assets/Portfolio4.jpg", "/assets/Portfolio5.jpg", "/assets/Portfolio6.jpg"], 
  ["/assets/Portfolio7.jpg", "/assets/Portfolio8.jpg", "/assets/Portfolio9.jpg"], 
];

const Portfolio = () => {
  const [indices, setIndices] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prevIndices) =>
        prevIndices.map((index, i) => (index + 1) % imageSets[i].length)
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-12" id="portfolio">
      <h2 className="text-3xl font-bold text-center mb-8">Our Featured Work</h2>
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {imageSets.map((images, i) => (
            <div key={i} className="portfolio-item relative w-full h-64 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={indices[i]} 
                  src={images[indices[i]]}
                  alt={`Portfolio ${indices[i] + 1}`}
                  className="absolute w-full h-full object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
