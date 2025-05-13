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
      aria-label="About the Wedding Photographer in Bangladesh"
    >
      {/* Left: About Description */}
      <motion.article
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        aria-labelledby="about-heading"
      >
        <h1 id="about-heading" className="text-5xl font-parisienne text-gray-800 italic mb-6">
          Meet Your Wedding Photographer in Bangladesh
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello, I’m <strong className="text-green-800">Anisur Rahman</strong> — a passionate{" "}
          <strong>wedding photographer based in Bangladesh</strong>, dedicated to capturing authentic, emotional, and timeless wedding moments.
          <br /><br />
          To me, <strong>wedding photography</strong> goes beyond the lens — it’s a heartfelt connection with people, emotions, and the intricate beauty of every celebration.
          From vibrant <strong>Holud ceremonies</strong> to quiet moments of joy, my goal is to document <em>honest love stories</em> that stand the test of time.
          <br /><br />
          I operate independently, delivering a personal, soulful experience to each couple. Whether you’re planning a colorful wedding in <strong>Dhaka</strong>, or a scenic beach ceremony in <strong>Cox’s Bazar</strong>, I bring dedication, creativity, and emotion to every frame.
          <br /><br />
          If you’re searching for a <strong>wedding photographer in Bangladesh</strong> who values storytelling and genuine moments, I’d be honored to help you create lasting memories. Let’s capture your special day — beautifully and authentically.
        </p>
      </motion.article>

      {/* Right: Photographer's Image */}
      <motion.figure
        className="md:w-1/2 flex justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/about.jpg`}
          alt="Anisur Rahman, top wedding photographer in Bangladesh capturing authentic moments"
          className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
          loading="lazy"
        />
        <figcaption className="sr-only">
          Anisur Rahman — Bangladeshi wedding photographer specializing in candid, emotional moments
        </figcaption>
      </motion.figure>
    </motion.section>
  );
};

export default AboutSection;
