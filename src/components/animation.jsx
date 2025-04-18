import { motion } from "framer-motion";

const AnimatedSection = ({ children, className }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}  // Start invisible & lower
      whileInView={{ opacity: 1, y: 0 }}  // Fade in & move up
      viewport={{ once: true, amount: 0.2 }}  // Trigger when 20% is visible
      transition={{ duration: 0.8, ease: "easeOut" }}  // Smooth effect
      className={`py-16 px-6 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
