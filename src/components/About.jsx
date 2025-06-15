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
        <h1
          id="about-heading"
          className="text-5xl font-parisienne text-gray-800 italic mb-6"
        >
          Meet Your Wedding Photographer in Bangladesh
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello, I’m <strong className="text-green-800">Anisur Rahman</strong> — a passionate{" "}
          <strong>wedding photographer based in Bangladesh</strong>, devoted to capturing the honest, emotional, and timeless moments that make your wedding uniquely yours.
        </p>
        <br />
        <p className="text-lg text-gray-700 leading-relaxed">
          To me, photography is more than just images — it’s about connection. It’s the stolen glances, the joyful chaos, the quiet in-betweens. From the vibrant rhythm of <strong>Holud ceremonies</strong> to the intimate stillness of your vows, I approach every celebration with heart and intention.
        </p>
        <br />
        <p className="text-lg text-gray-700 leading-relaxed">
          Working independently allows me to offer a deeply personal experience. Whether you're planning a colorful wedding in <strong>Dhaka</strong> or a serene coastal ceremony in <strong>Cox’s Bazar</strong>, my focus remains the same — to tell your love story with authenticity, artistry, and soul.
        </p>
        <br />
        <p className="text-lg text-gray-700 leading-relaxed">
          If you’re looking for a <strong>wedding photographer in Bangladesh</strong> who values real moments over posed perfection — I’d be honored to document your day in a way that feels true to you.
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
          alt="Anisur Rahman - Bangladesh wedding photographer capturing real moments"
          className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
          loading="lazy"
        />
        <figcaption className="sr-only">
          Anisur Rahman – Bangladeshi wedding photographer capturing Holud, Nikah, and beach wedding moments with emotion and elegance.
        </figcaption>
      </motion.figure>
    </motion.section>
  );
};

export default AboutSection;
