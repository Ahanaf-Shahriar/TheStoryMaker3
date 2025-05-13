import React, { useState } from "react";
import { motion } from "framer-motion";

// Group packages by base name
const rawPackages = [
  { name: "Basic One", price: "5,000৳", details: ["1 Senior Photographer", "Online Delivery", "5 Hours Coverage"] },
  { name: "Basic Two", price: "7,000৳", details: ["1 Lead Photographer", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "Classic One", price: "9,000৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "Online Delivery", "5 Hours Coverage"] },
  { name: "Classic Two", price: "11,000৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "Standard One", price: "13,000৳", details: ["2 Senior Photographers", "1 Senior Cinematographer", "Online Delivery", "5 Hours Coverage"] },
  { name: "Standard Two", price: "23,000৳", details: ["2 Lead Photographers (Anisur Rahman)", "1 Lead Cinematographer", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "Premium One", price: "16,000৳", details: ["2 Senior Photographers", "2 Senior Cinematographers", "Online Delivery", "5 Hours Coverage"] },
  { name: "Premium Two", price: "26,000৳", details: ["2 Lead Photographers (Anisur Rahman)", "2 Lead Cinematographers", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "The Line Story One", price: "30,000৳", details: ["3 Lead Photographers (Anisur Rahman)", "2 Lead Cinematographers", "5 Hours Coverage"] },
  { name: "The Line Story Two", price: "45,000৳", details: ["3 Lead Photographers (Anisur Rahman)", "3 Lead Cinematographers", "5 Hours Coverage"] },
  { name: "The Line Story Three", price: "60,000৳", details: ["4 Lead Photographers (Anisur Rahman)", "4 Lead Cinematographers", "5 Hours Coverage"] },
  { name: "The Birthday One", price: "5,500৳", details: ["1 Senior Photographer",  "5 Hours Coverage"] },
  { name: "The Birthday Two", price: "9,500৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Birthday Three", price: "15,000৳", details: ["2 Lead Photographers (Anisur Rahman)", "1 Lead Cinematographers", "5 Hours Coverage"] },
  { name: "The Maternity One", price: "7,500৳", details: ["1 Lead Photographer (Anisur Rahman)",  "5 Hours Coverage"] },
  { name: "The Maternity Two", price: "14,500৳", details: ["1 Lead Photographer", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Rong One", price: "4,500৳", details: ["1 Senior Photographer",  "4 Hours Coverage"] },
  { name: "The Rong Two", price: "8,500৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Rong Three", price: "15,000৳", details: ["2 Senior Photographer (Anisur Rahman)", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Outdoor One", price: "5,000৳", details: ["1 Lead Photographer", "Online Delivery", "2 Location" , "4 Hour Coverage"] },
  { name: "The Outdoor Two", price: "11,000৳", details: ["1 Lead Photographer", "1 Lead Cinematographer",   "5 Hours Coverage"] },
  { name: "The Bridal Shower One", price: "7,500৳", details: ["1 Lead Photographer (Anisur Rahman)", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Bridal Shower Two", price: "13,000৳", details: ["1 Senior Photographer","1 Lead Cinematographer",  "5 Hours Coverage"] },
];

// Group by base type
const groupedPackages = {};
rawPackages.forEach((pkg) => {
  const words = pkg.name.trim().split(" ");
  const base = words.slice(0, -1).join(" "); // removes the last word (e.g., "One", "Two", etc.)
  if (!groupedPackages[base]) groupedPackages[base] = [];
  groupedPackages[base].push(pkg);
});


const PackageSection = () => {
  const [selectedOption, setSelectedOption] = useState({});

  return (
    <section className="w-full py-20 px-6 text-center bg-gradient-to-b from-[#fdf6ef] to-[#e9e1d6]" id="packages">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Wedding Photography Packages in Bangladesh
        </h2>
        <p className="text-gray-600 text-lg">
          Explore tailored wedding photography packages — perfect for capturing your special day with elegance, emotion, and authentic storytelling.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {Object.entries(groupedPackages).map(([baseName, variants], index) => {
          const selected = selectedOption[baseName] || 0;
          const pkg = variants[selected];

          return (
            <motion.div
              key={baseName}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all p-8 border border-gray-100 flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-full mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">{pkg.name}</h3>
                <p className="text-xl font-bold text-emerald-600">{pkg.price}</p>
              </div>

              <div className="flex gap-2 mb-4">
                {variants.map((v, i) => (
                  <button
                    key={v.name}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selected === i ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                    onClick={() =>
                      setSelectedOption((prev) => ({
                        ...prev,
                        [baseName]: i,
                      }))
                    }
                  >
                    {v.name.split(" ").pop()}
                  </button>
                ))}
              </div>

              <ul className="mt-2 text-gray-600 space-y-3 w-full">
                {pkg.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-gray-500 text-sm leading-relaxed">
        <p>
          Offering affordable, professional wedding photography packages in Dhaka, Chittagong, Sylhet, and across Bangladesh...
        </p>
      </div>
    </section>
  );
};

export default PackageSection;
