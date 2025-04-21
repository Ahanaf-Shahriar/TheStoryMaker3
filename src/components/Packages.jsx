import React from "react";
import { motion } from "framer-motion";

const packages = [
  { name: "Basic", price: "5,000Tk", details: ["1 Senior Photographer", "Online Delivery", "5 Hour Coverage"] },
  { name: "Basic Plus", price: "7,000Tk", details: ["1 Lead Photographer", "Online & Pendrive Delivery", "5 Hour Coverage"] },
  { name: "Classic", price: "9,000Tk", details: ["1 Senior Photographer", "1 Lead Cinematographer", "Online Delivery", "5 Hour Coverage"] },
  { name: "Classic Plus", price: "11,000Tk", details: ["1 Senior Photographer", "1 Lead Cinematographer", "Online & Pendrive Delivery", "5 Hour Coverage"] },
  { name: "Standard", price: "13,000Tk", details: ["2 Senior Photographers", "1 Senior Cinematographer", "Online Delivery", "5 Hour Coverage"] },
  { name: "Standard Plus", price: "23,000Tk", details: ["2 Lead Photographers (Anisur Rahman)", "1 Lead Cinematographer", "Online & Pendrive Delivery", "5 Hour Coverage"] },
  { name: "Premium", price: "16,000Tk", details: ["2 Senior Photographers", "2 Senior Cinematographers", "Online Delivery", "5 Hour Coverage"] },
  { name: "Premium Plus", price: "26,000Tk", details: ["2 Lead Photographers (Anisur Rahman)", "2 Lead Cinematographers", "Online & Pendrive Delivery", "5 Hour Coverage"] },
  { name: "Ultimate", price: "$399", details: ["1 Senior Photographer", "Online Delivery", "5 Hour Coverage"] },
  { name: "Ultimate Plus", price: "$449", details: ["1 Senior Photographer", "Online Delivery", "5 Hour Coverage"] },
];

const PackageSection = () => {
  return (
    <section
      className="w-full py-20 px-6 text-center bg-gradient-to-b from-[#fdf6ef] to-[#e9e1d6]"
      id="packages"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-12 tracking-wide">Choose Your Perfect Package</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all p-8 border border-gray-100 flex flex-col items-start"
            whileHover={{ y: -5 }}
          >
            <div className="w-full mb-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">{pkg.name}</h3>
              <p className="text-xl font-bold text-emerald-600">{pkg.price}</p>
            </div>

            <ul className="mt-4 text-gray-600 space-y-3 w-full">
              {pkg.details.map((detail, i) => (
                <li key={i} className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mt-1 mr-2 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PackageSection;
