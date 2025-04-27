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
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#F5E1C8] px-6 md:px-16 py-20"
      id="about"
    >
      {/* Left: About Description */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-parisienne text-gray-800 italic mb-6">
          Meet Your Photographer
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I’m <span className="font-semibold text-green-800">Anisur Rahman</span> — a passionate{" "}
          <span className="font-semibold">wedding photographer based in Bangladesh</span>, 
          specializing in capturing real, raw, and unforgettable moments.
          <br /><br />
          For me, <span className="font-semibold">wedding photography</span> is more than just a profession — 
          it’s a way of connecting deeply with people, emotions, and the little details that make every celebration unique. 
          Whether it's the vibrant colors of a traditional{" "}
          <span className="font-semibold">Holud ceremony</span> or quiet candid moments between family and friends, 
          I strive to tell honest love stories through my lens — stories filled with laughter, tears, and timeless memories.
          <br /><br />
          I work independently, offering a personalized and heartfelt experience for every couple I photograph. 
          From colorful <span className="font-semibold">Dhaka weddings</span> to serene{" "}
          <span className="font-semibold">destination weddings in Cox’s Bazar</span> and beyond, 
          I bring full passion, creativity, and commitment to each event.
          <br /><br />
          If you’re looking for a <span className="font-semibold">wedding photographer in Bangladesh</span> who values 
          genuine storytelling and real emotions, I would be honored to be a part of your journey. 
          Let’s create meaningful memories that you’ll cherish forever.
        </p>
      </motion.div>

      {/* Right: Photographer's Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/about.jpg`}
          alt="Anisur Rahman - Wedding Photographer Bangladesh"
          className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
        />
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
