import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const packages = [
  { name: "Basic", price: "5,000Tk", details: ["1 senior Photographer", "Online Delivery", "5 Hour Coverage"] },
  { name: "Basic Plus", price: "7,0000Tk", details: ["1 Lead Photographer", "Online & Pendrive Delivery", "5 Hour Coverage"]},
  { name: "Classic", price: "9,000Tk", details: ["1 Senior Photographer", "1 Lead Cinemetographer", "Online Delivery", "5 Hour Coverage"]},
  { name: "Classic Plus", price: "11,000Tk", details: ["1 senior Photographer", "1 Lead Cinemetographer", "Online & Pendrive Delivery", "5 Hour Coverage"] },
  { name: "Standard", price: "13,000Tk", details: ["2 senior Photographer","1 Senior Cinemetographer" ,"Online Delivery", "5 Hour Coverage"]},
  { name: "Standard Plus", price: "23,000Tk", details: ["2 Lead Photographer (Anisur Rahman)","1 Lead Cinematographer","Online & Pendrive Delivery", "5 Hour Coverage"]},
  { name: "Premium", price: "16,000Tk", details: ["2 senior Photographer", "2 Senior Cinemetographer ","Online Delivery", "5 Hour Coverage"] },
  { name: "Premium Plus", price: "26,000Tk", details: ["2 Lead Photographer (Anisur Rahman)","2 lead Cinemetographer" ,"Online & Pendrive Delivery", "5 Hour Coverage"] },
  { name: "Ultimate", price: "$399", details: ["1 senior Photographer", "Online Delivery", "5 Hour Coverage"] },
  { name: "Ultimate Plus", price: "$449", details: ["1 senior Photographer", "Online Delivery", "5 Hour Coverage"] }
];

const PackageSection = () => {
  const [expanded, setExpanded] = useState(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const toggleDetails = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="w-full py-16 px-6 text-center bg-gradient-to-b bg-[#F5E1C8] to-indigo-50"
      id="packages"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Choose Your Perfect Package</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col justify-center items-center p-8 w-72 bg-white shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-bold text-gray-700">{pkg.name}</h1>
            <p className="text-gray-500 mt-2 text-lg">{pkg.price}</p>
            <button
              onClick={() => toggleDetails(index)}
              className="mt-6 flex items-center bg-green-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              View Details
              <motion.svg
                className="w-5 h-5 ml-2"
                animate={{ rotate: expanded === index ? 180 : 0 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {expanded === index && (
                <motion.ul
                  className="mt-6 text-gray-600 space-y-3 text-left w-full px-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {pkg.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PackageSection;
