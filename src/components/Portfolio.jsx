import React, { useRef } from "react";
import Masonry from "react-masonry-css";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  `${import.meta.env.BASE_URL}assets/Portfolio1.jpg`,
  `${import.meta.env.BASE_URL}assets/Portfolio2.jpg`,
  `${import.meta.env.BASE_URL}assets/Portfolio3.jpg`,
  `${import.meta.env.BASE_URL}assets/Portfolio4.jpg`,
  `${import.meta.env.BASE_URL}assets/Portfolio5.jpg`,
  `${import.meta.env.BASE_URL}assets/Portfolio6.jpg`,
  `${import.meta.env.BASE_URL}assets/Portfolio7.jpg`,
  `${import.meta.env.BASE_URL}assets/Portfolio8.jpg`,
  `${import.meta.env.BASE_URL}assets/Portfolio9.jpg`,
];

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const breakpoints = {
    default: 5,
    1024: 3,
    768: 1,
  };

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="min-h-screen flex flex-col justify-center items-center bg-[#F5E1C8] py-12"
      id="portfolio"
    >
      <div className="w-full bg-[#F5E1C8] py-12 flex justify-center">
        <h2 className="text-4xl font-normal text-center px-6 max-w-4xl font-[Dancing Script] italic">
          <span className="text-violet-400">choosing to elope opens up endless possibilities, but often becomes overwhelming </span>
          <span className="text-rose-200"> - let me help!</span>
        </h2>
      </div>

      <div className="w-full px-4">
        <Masonry breakpointCols={breakpoints} className="flex gap-6" columnClassName="masonry-column">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative mb-6 overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            >
              <img src={img} alt={`Portfolio ${index + 1}`} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </motion.section>
  );
};

export default Portfolio;
