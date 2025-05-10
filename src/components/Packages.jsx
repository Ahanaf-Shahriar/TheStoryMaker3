import React, { useState } from "react";
import { motion } from "framer-motion";

const packages = [
  { name: "Basic", price: "5,000৳", details: ["1 Senior Photographer", "Online Delivery", "5 Hours Coverage"] },
  { name: "Basic Plus", price: "7,000৳", details: ["1 Lead Photographer", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "Classic", price: "9,000৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "Online Delivery", "5 Hours Coverage"] },
  { name: "Classic Plus", price: "11,000৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "Standard", price: "13,000৳", details: ["2 Senior Photographers", "1 Senior Cinematographer", "Online Delivery", "5 Hours Coverage"] },
  { name: "Standard Plus", price: "23,000৳", details: ["2 Lead Photographers (Anisur Rahman)", "1 Lead Cinematographer", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "Premium", price: "16,000৳", details: ["2 Senior Photographers", "2 Senior Cinematographers", "Online Delivery", "5 Hours Coverage"] },
  { name: "Premium Plus", price: "26,000৳", details: ["2 Lead Photographers (Anisur Rahman)", "2 Lead Cinematographers", "Online & Pendrive Delivery", "5 Hours Coverage"] },
];

// Group base and plus packages together
const groupedPackages = [];
for (let i = 0; i < packages.length; i++) {
  const current = packages[i];
  const next = packages[i + 1];
  if (next && next.name.startsWith(current.name) && next.name.includes("Plus")) {
    groupedPackages.push({ base: current, plus: next });
    i++; // skip next
  } else {
    groupedPackages.push({ base: current, plus: null });
  }
}

const PackageSection = () => {
  const [visiblePlus, setVisiblePlus] = useState({});

  const togglePlus = (name) => {
    setVisiblePlus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <section
      className="w-full py-20 px-6 text-center bg-gradient-to-b from-[#fdf6ef] to-[#e9e1d6]"
      id="packages"
    >
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Wedding Photography Packages in Bangladesh
        </h2>
        <p className="text-gray-600 text-lg">
          Explore tailored wedding photography packages — perfect for capturing your special day with elegance, emotion, and authentic storytelling.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {groupedPackages.map(({ base, plus }, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all p-8 border border-gray-100 flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-full mb-4 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">{base.name}</h3>
                  <p className="text-xl font-bold text-emerald-600">{base.price}</p>
                </div>
                {plus && (
                  <button
                    onClick={() => togglePlus(base.name)}
                    className="text-emerald-600 hover:text-emerald-800 transition"
                    title="Show Plus Package"
                  >
                    ▼
                  </button>
                )}
              </div>

              <ul className="mt-4 text-gray-600 space-y-3 w-full">
                {base.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {plus && visiblePlus[base.name] && (
              <motion.div
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all p-8 border border-gray-100 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="w-full mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">{plus.name}</h3>
                  <p className="text-xl font-bold text-emerald-600">{plus.price}</p>
                </div>

                <ul className="mt-4 text-gray-600 space-y-3 w-full">
                  {plus.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </React.Fragment>
        ))}
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
