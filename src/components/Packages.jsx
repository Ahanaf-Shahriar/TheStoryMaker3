import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const demoLinks = {
  Basic: "https://www.facebook.com/photo?fbid=1206753771600992&set=pcb.1206753871600982",
  "Classic": "https://www.facebook.com/photo?fbid=1206753758267660&set=pcb.1206753871600982",
  Standard: "https://www.facebook.com/photo?fbid=1206753761600993&set=pcb.1206753871600982",
  Premium: "https://www.facebook.com/photo?fbid=1206753768267659&set=pcb.1206753871600982",
  Essential: "https://www.facebook.com/photo?fbid=1206753764934326&set=pcb.1206753871600982",
  Ruby: "https://www.facebook.com/photo/?fbid=1206753751600994&set=pcb.1206753871600982",
  Endless: "https://www.facebook.com/photo/?fbid=1206753754934327&set=pcb.1206753871600982",
  Outdoor: "https://www.facebook.com/photo/?fbid=1206756094934093&set=pcb.1206753871600982",
  default: "https://www.facebook.com/TheStoryMakerBD"
};

const rawPackages = [
  {
    name: "Basic",
    price: "8,999৳",
    details: [
      "1 Photographer",
      "Unlimited Raw Images",
      "Unlimited Edited Usable Images",
      "50 Copy 4R Prints",
      "Online Delivery",
      "Complimentary Pen Drive",
      "Up to 5 Hours Continuous Coverage",
      "Delivery in Approximately 20 Working Days"
    ]
  },
  {
    name: "Classic",
    price: "15,999৳",
    details: [
      "1 Photographer",
      "1 Cinematographer",
      "Unlimited Raw Images",
      "Unlimited Edited Usable Images",
      "50 Copy 4R Prints",
      "2–3 Min Highlight Trailer",
      "20–30 Min Full Movie",
      "Online Delivery",
      "Complimentary Pen Drive",
      "Up to 5 Hours Continuous Coverage",
      "Delivery in Approximately 20 Working Days"
    ]
  },
  {
    name: "Standard",
    price: "20,999৳",
    details: [
      "2 Photographers",
      "1 Cinematographer",
      "Unlimited Raw Images",
      "Unlimited Edited Usable Images",
      "100 Copy 4R Prints",
      "2–3 Min Highlight Trailer",
      "20–30 Min Full Movie",
      "Online Delivery",
      "Complimentary Pen Drive",
      "Up to 5 Hours Continuous Coverage",
      "Delivery in Approximately 20 Working Days"
    ]
  },
  {
    name: "Premium",
    price: "25,999৳",
    details: [
      "2 Photographers",
      "2 Cinematographers",
      "Unlimited Raw Images",
      "Unlimited Edited Usable Images",
      "100 Copy 4R Prints",
      "2–4 Min Highlight Trailer",
      "30–40 Min Full Movie",
      "1 Reels Video",
      "Online Delivery",
      "Complimentary Pen Drive",
      "Up to 6 Hours Continuous Coverage",
      "Delivery in Approximately 20 Working Days"
    ]
  },
  {
    name: "Essential",
    price: "30,999৳",
    details: [
      "3 Photographers",
      "2 Cinematographers",
      "Unlimited Raw Images",
      "Unlimited Edited Usable Images",
      "150 Copy 4R Prints",
      "2–4 Min Highlight Trailer",
      "30–40 Min Full Movie",
      "1 Reels Video",
      "Online Delivery",
      "Complimentary Pen Drive",
      "Up to 6 Hours Continuous Coverage",
      "Delivery in Approximately 20 Working Days"
    ]
  },
  {
    name: "Ruby",
    price: "35,999৳",
    details: [
      "3 Photographers",
      "3 Cinematographers",
      "Unlimited Raw Images",
      "Unlimited Edited Usable Images",
      "150 Copy 4R Prints",
      "2–4 Min Highlight Trailer",
      "30–40 Min Full Movie",
      "1 Reels Video",
      "Online Delivery",
      "Complimentary Pen Drive",
      "Up to 6 Hours Continuous Coverage",
      "Delivery in Approximately 20 Working Days"
    ]
  },
  {
    name: "Endless",
    price: "69,999৳",
    details: [
      "4 Photographers",
      "4 Cinematographers",
      "Unlimited Raw Images",
      "Unlimited Edited Usable Images",
      "1 Drone for Aerial Shots",
      "200 Copy 5R Prints",
      "1 Photo Frame",
      "1 Photo Album",
      "2–4 Min Highlight Trailer",
      "30–40 Min Full Movie",
      "1 Reels Video",
      "Online Delivery",
      "Complimentary Pen Drive",
      "No Time Limit Coverage",
      "Delivery in Approximately 20 Working Days"
    ]
  },
  {
    name: "Outdoor",
    price: "12,999৳",
    details: [
      "1 Photographer",
      "1 Cinematographer",
      "Unlimited Raw Images",
      "Unlimited Edited Usable Images",
      "30 Copy 4R Prints",
      "2–3 Min Highlight Trailer",
      "15–200 Min Full Movie",
      "Online Delivery",
      "Complimentary Pen Drive",
      "Upto 3 hours of continous coverage",
      "Delivery in Approximately 15 Working Days"
    ]
  }
];

const groupedPackages = {};
rawPackages.forEach((pkg) => {
  const groupKey = pkg.name.replace(/(One|Two|Three)$/, "").trim();
  if (!groupedPackages[groupKey]) groupedPackages[groupKey] = [];
  groupedPackages[groupKey].push(pkg);
});

const PackageSection = () => {
  const [selectedOption, setSelectedOption] = useState({});

  return (
    <section
      className="w-full py-24 px-6 text-center relative overflow-hidden"
      id="packages"
      style={{
        background: 'linear-gradient(135deg, #fdfbf7 0%, #f8f3ed 50%, #f0e8dd 100%)'
      }}
    >
      <Helmet>
        <title>Wedding Photography Packages in Bangladesh | The Story Maker</title>
        <meta
          name="description"
          content="Explore elegant & affordable wedding photography packages in Dhaka, Sylhet, Chittagong, and more. View albums, features & pricing here."
        />
        <meta property="og:title" content="Wedding Photography Packages in Bangladesh" />
        <meta
          property="og:description"
          content="Timeless storytelling. Affordable photography packages for weddings and events in Bangladesh."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/#packages" />
      </Helmet>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-100 to-rose-100 rounded-full">
            <span className="text-sm font-semibold text-amber-900 tracking-wide uppercase">Our Packages</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Wedding Photography Packages
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 mt-2">
              in Bangladesh
            </span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">
            Explore elegant & affordable wedding photography packages tailored for every celebration — captured with
            emotion & authenticity.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        {Object.entries(groupedPackages).map(([groupName, variants], index) => {
          const selected = selectedOption[groupName] || 0;
          const pkg = variants[selected];

          const demoMatch = Object.keys(demoLinks).find((key) =>
            groupName.toLowerCase().includes(key.toLowerCase())
          );
          const link = demoLinks[demoMatch] || demoLinks.default;

          const isPopular = groupName === "Premium" || groupName === "Essential";
          const isPremium = groupName === "Endless" || groupName === "Ruby";

          return (
            <motion.article
              key={groupName + index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border-2 flex flex-col items-start relative group ${
                isPopular ? 'border-rose-300' : isPremium ? 'border-amber-300' : 'border-gray-100'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Popular badge */}
              {isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wide">
                    Popular
                  </span>
                </div>
              )}

              {/* Premium badge */}
              {isPremium && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wide flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Premium
                  </span>
                </div>
              )}

              {/* Accent corner decoration */}
              <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 ${
                isPopular ? 'bg-rose-400' : isPremium ? 'bg-amber-400' : 'bg-gray-300'
              } rounded-bl-full`}></div>

              <header className="w-full mb-5 relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">{pkg.name}</h2>
                <div className="flex items-baseline gap-1">
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {pkg.price}
                  </p>
                </div>
              </header>

              {variants.length > 1 && (
                <div className="flex gap-2 mb-6 flex-wrap w-full">
                  {variants.map((v, i) => (
                    <button
                      key={v.name}
                      className={`px-4 py-2 text-sm rounded-lg border-2 font-semibold transition-all duration-300 ${
                        selected === i
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-transparent shadow-md scale-105"
                          : "bg-white text-gray-700 border-gray-200 hover:border-emerald-400 hover:bg-emerald-50"
                      }`}
                      aria-label={`Select ${v.name}`}
                      onClick={() =>
                        setSelectedOption((prev) => ({
                          ...prev,
                          [groupName]: i,
                        }))
                      }
                    >
                      {v.name.split(" ").pop()}
                    </button>
                  ))}
                </div>
              )}

              <ul className="mt-3 text-gray-700 space-y-3 w-full flex-grow">
                {pkg.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm leading-relaxed">
                    <svg
                      className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View sample album for ${pkg.name}`}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl shadow-md text-white font-semibold bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black transition-all duration-300 ease-out group-hover:shadow-xl transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transition-transform group-hover:rotate-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Details
              </a>
            </motion.article>
          );
        })}
      </div>

      <motion.div 
        className="max-w-4xl mx-auto mt-24 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
          <p className="text-gray-700 text-base leading-relaxed">
            Offering affordable, professional wedding photography packages in <span className="font-semibold text-gray-900">Dhaka, Chittagong, Sylhet</span>, and across
            Bangladesh — let us preserve your story with timeless frames.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default PackageSection;