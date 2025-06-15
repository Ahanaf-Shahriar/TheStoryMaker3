import React, { useRef } from "react";
import Masonry from "react-masonry-css";
import { motion, useScroll, useTransform } from "framer-motion";

// Map each label to a link
const demoLinks = {
  Akath: "https://www.facebook.com/share/p/18ufckqyrq/",
  "Outdoor Reception": "https://www.facebook.com/share/p/15p75KfAV4/",
  "Wedding Reception": "https://www.facebook.com/share/p/1ErUpCoPJ5/",
 // Outdoor: "https://www.facebook.com/share/p/12CFPrMwmis/",
  Wedding: "https://www.facebook.com/share/p/1AVXF8CRXZ/",
  Holud: "https://www.facebook.com/share/p/1HhwxXLTdK/",
  Outdoor: "https://www.facebook.com/share/p/1CPBMDALnr/",
  Birthday: "https://www.facebook.com/share/p/16SuBqyuTY/",
  "Bridal shower": "https://www.facebook.com/share/p/16aY1nrJ1q/",
  Maternity: "https://www.facebook.com/share/p/1939TA3FAt/",
  Rong: "https://www.facebook.com/share/p/1ATEGLHGvH/",
  Basic: "https://www.facebook.com/share/p/18ufckqyrq/",
  Reception: "https://www.facebook.com/share/p/1ErUpCoPJ5/",
  Premium: "https://www.facebook.com/share/p/1CPBMDALnr/",
  default: "https://www.facebook.com/share/p/1CPBMDALnr/",
};

// Image array with labels for mapping
const images = [
  {
    src: `${import.meta.env.BASE_URL}assets/Portfolio1.jpg`,
    label: "Holud",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/Portfolio2.jpg`,
    label: "Birthday",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/Portfolio3.jpg`,
    label: "Bridal shower",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/Portfolio4.jpg`,
    label: "Outdoor",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/Portfolio5.jpg`,
    label: "Reception",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/Portfolio6.jpg`,
    label: "Rong",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/Portfolio10.jpg`,
    label: "Outdoor",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/Portfolio9.jpg`,
    label: "Wedding",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/Portfolio12.jpg`,
    label: "Outdoor Reception",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/Portfolio14.jpg`,
    label: "Maternity",
  },
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
      {/* Section Title */}
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
          {images.map(({ src, label }, index) => {
            const link = demoLinks[label] || demoLinks.default;

            return (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mb-6 block overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all group"
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
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
                }}
              >
                <img
                  src={src}
                  alt={`Wedding Portfolio Photo ${index + 1}`}
                  className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Optional Label on Hover */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity text-center font-medium tracking-wide">
                  {label}
                </div>
              </motion.a>
            );
          })}
        </Masonry>
      </div>

      {/* SEO Text */}
      <div className="max-w-3xl mx-auto mt-20 text-center text-gray-500 text-sm leading-relaxed px-4">
        <p>
          Capturing authentic wedding moments across Dhaka, Chittagong, Sylhet, and beyond — from vibrant Holud ceremonies to intimate Nikah gatherings. Let us turn your wedding day into a visual story you'll cherish forever.
        </p>
      </div>
    </motion.section>
  );
};

export default Portfolio;
