import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#F5E1C8] px-6 md:px-16 py-12"
      id="about"
    >
      {/* Left: About Description */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-parisienne text-gray-800 italic">
          Meet Your Photographer
        </h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          Hi, I’m Anisur Rahman — a wedding photographer and story maker with a
          deep love for capturing moments that feel real, raw, and
          unforgettable.
          <br />
          <br />
          Photography has always been more than just a profession for me. It’s
          my way of connecting with people, emotions, and the little details
          that make every wedding special. From the bright colors of a Holud to
          the quiet moments between family and friends, I try to tell honest
          stories through my lens — stories full of love, laughter, and
          everything in between.
          <br />
          <br />
          I work independently, and with each wedding I document, I pour in my
          full passion, commitment, and a bit of my heart. I’m drawn to the
          candid, the unplanned, the fleeting — the kind of moments that often
          go unnoticed but mean the most when you look back.
          <br />
          <br />
          Over the years, I’ve had the blessing of working with amazing couples
          across the country and beyond, capturing everything from local
          celebrations to destination weddings. Whether it's a quiet backyard
          ceremony or a glamorous reception, I approach every story with the
          same sense of wonder and gratitude.
          <br />
          <br />
          If my work resonates with you, I’d be honored to be part of your
          journey — to help preserve your day not just through photos, but
          through meaningful memories you’ll cherish forever.
        </p>
      </motion.div>

      {/* Right: Photographer's Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/about.jpg`}
          alt="Photographer"
          className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
