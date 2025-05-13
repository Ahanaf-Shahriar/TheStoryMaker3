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
    offset: ["start 0.9", "start 0.3"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const breakpoints = {
    default: 5,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <motion.section
      ref={ref}
      id="portfolio"
      aria-label="Wedding photography portfolio gallery by The Story Maker"
      style={{ y, opacity }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#f5e1c8] to-[#e8d9c2] py-20"
    >
      {/* SEO Optimized Title */}
      <div className="w-full flex flex-col items-center px-6 text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 font-parisienne italic leading-tight mb-6">
          Timeless Moments
        </h2>
        <p className="text-gray-600 max-w-2xl text-lg">
          Discover a curated collection of real wedding stories, candid moments, and heartfelt celebrations.
        </p>
      </div>

      {/* Portfolio Gallery */}
      <div className="w-full px-4">
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-6"
          columnClassName="masonry-column"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative mb-6 overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src={img}
                alt={`Wedding Portfolio Photo ${index + 1}`}
                className="w-full h-auto object-cover rounded-3xl"
              />
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* SEO Text at Bottom */}
      <div className="max-w-3xl mx-auto mt-20 text-center text-gray-500 text-sm leading-relaxed px-4">
        <p>
          Capturing authentic wedding moments across Dhaka, Chittagong, Sylhet, and beyond — from vibrant Holud ceremonies to intimate Nikah gatherings. Let us turn your wedding day into a visual story you'll cherish forever.
        </p>
      </div>
    </motion.section>
  );
};

export default Portfolio;
