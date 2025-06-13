import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const demoLinks = {
  Akath: "https://www.facebook.com/share/p/18ufckqyrq/",
  Cristine: "https://www.facebook.com/share/p/15p75KfAV4/",
  "Wedding Reception": "https://www.facebook.com/share/p/1ErUpCoPJ5/",
  Outdoor: "https://www.facebook.com/share/p/12CFPrMwmis/",
  Wedding: "https://www.facebook.com/share/p/1AVXF8CRXZ/",
  Holud: "https://www.facebook.com/share/p/1HhwxXLTdK/",
  Reception: "https://www.facebook.com/share/p/1CPBMDALnr/",
  Birthday: "https://www.facebook.com/share/p/16SuBqyuTY/",
  "Bridal shower": "https://www.facebook.com/share/p/16aY1nrJ1q/",
  Maternity: "https://www.facebook.com/share/p/1939TA3FAt/",
  Rong: "https://www.facebook.com/share/p/1HhwxXLTdK/",
  Story: "https://www.facebook.com/share/p/15p75KfAV4/",
  Basic: "https://www.facebook.com/share/p/18ufckqyrq/",
  Classic: "https://www.facebook.com/share/p/1AVXF8CRXZ/",
  Standard: "https://www.facebook.com/share/p/1ErUpCoPJ5/",
  Premium: "https://www.facebook.com/share/p/1CPBMDALnr/",
  default: "https://www.facebook.com/share/p/1CPBMDALnr/",
};

const rawPackages = [
  { name: "Basic One", price: "5,000৳", details: ["1 Senior Photographer", "Online Delivery", "5 Hours Coverage"] },
  { name: "Basic Two", price: "7,000৳", details: ["1 Lead Photographer", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "Classic One", price: "9,000৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "Online Delivery", "5 Hours Coverage"] },
  { name: "Classic Two", price: "11,000৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "Standard One", price: "13,000৳", details: ["2 Senior Photographers", "1 Senior Cinematographer", "Online Delivery", "5 Hours Coverage"] },
  { name: "Standard Two", price: "23,000৳", details: ["2 Lead Photographers (Anisur Rahman)", "1 Lead Cinematographer", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "Premium One", price: "16,000৳", details: ["2 Senior Photographers", "2 Senior Cinematographers", "Online Delivery", "5 Hours Coverage"] },
  { name: "Premium Two", price: "26,000৳", details: ["2 Lead Photographers (Anisur Rahman)", "2 Lead Cinematographers", "Online & Pendrive Delivery", "5 Hours Coverage"] },
  { name: "The Story Line One", price: "30,000৳", details: ["3 Lead Photographers (Anisur Rahman)", "2 Lead Cinematographers", "5 Hours Coverage"] },
  { name: "The Story Line Two", price: "45,000৳", details: ["3 Lead Photographers (Anisur Rahman)", "3 Lead Cinematographers", "5 Hours Coverage"] },
  { name: "The Story Line Three", price: "60,000৳", details: ["4 Lead Photographers (Anisur Rahman)", "4 Lead Cinematographers", "5 Hours Coverage"] },
  { name: "The Birthday One", price: "5,500৳", details: ["1 Senior Photographer", "5 Hours Coverage"] },
  { name: "The Birthday Two", price: "9,500৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Birthday Three", price: "15,000৳", details: ["2 Lead Photographers (Anisur Rahman)", "1 Lead Cinematographers", "5 Hours Coverage"] },
  { name: "The Maternity One", price: "7,500৳", details: ["1 Lead Photographer (Anisur Rahman)", "5 Hours Coverage"] },
  { name: "The Maternity Two", price: "14,500৳", details: ["1 Lead Photographer", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Rong One", price: "4,500৳", details: ["1 Senior Photographer", "4 Hours Coverage"] },
  { name: "The Rong Two", price: "8,500৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Rong Three", price: "15,000৳", details: ["2 Senior Photographer (Anisur Rahman)", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Outdoor One", price: "5,000৳", details: ["1 Lead Photographer", "Online Delivery", "2 Location", "4 Hour Coverage"] },
  { name: "The Outdoor Two", price: "11,000৳", details: ["1 Lead Photographer", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Bridal Shower One", price: "7,500৳", details: ["1 Lead Photographer (Anisur Rahman)", "1 Lead Cinematographer", "5 Hours Coverage"] },
  { name: "The Bridal Shower Two", price: "13,000৳", details: ["1 Senior Photographer", "1 Lead Cinematographer", "5 Hours Coverage"] },
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
      className="w-full py-20 px-6 text-center bg-gradient-to-b from-[#fdf6ef] to-[#e9e1d6]"
      id="packages"
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

      <div className="max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          Wedding Photography Packages in Bangladesh
        </h1>
        <p className="text-gray-600 text-lg">
          Explore elegant & affordable wedding photography packages tailored for every celebration — captured with
          emotion & authenticity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {Object.entries(groupedPackages).map(([groupName, variants], index) => {
          const selected = selectedOption[groupName] || 0;
          const pkg = variants[selected];

          const demoMatch = Object.keys(demoLinks).find((key) =>
            groupName.toLowerCase().includes(key.toLowerCase())
          );
          const link = demoLinks[demoMatch] || demoLinks.default;

          return (
            <motion.article
              key={groupName + index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all p-8 border border-[#f3ede6] flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <header className="w-full mb-4">
                <h2 className="text-2xl font-semibold text-[#5a4d3f] mb-1">{pkg.name}</h2>
                <p className="text-xl font-bold text-emerald-600">{pkg.price}</p>
              </header>

              <div className="flex gap-2 mb-4 flex-wrap">
                {variants.map((v, i) => (
                  <button
                    key={v.name}
                    className={`px-3 py-1 text-sm rounded-full border font-medium ${
                      selected === i
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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

              <ul className="mt-2 text-gray-600 space-y-3 w-full">
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

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View sample album for ${pkg.name}`}
                className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full shadow-md text-gray-800 bg-[#f5e9db] hover:bg-[#e7d6c4] transition-all duration-300 ease-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-4.553a1 1 0 00-1.414-1.414L13 8.586 7.414 3H5v2.414L10.586 11 3 18.586V21h2.414L13 12.414l3.586 3.586a1 1 0 001.414-1.414L15 10z"
                  />
                </svg>
                View Album
              </a>
            </motion.article>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-gray-500 text-sm leading-relaxed">
        <p>
          Offering affordable, professional wedding photography packages in Dhaka, Chittagong, Sylhet, and across
          Bangladesh — let us preserve your story with timeless frames.
        </p>
      </div>
    </section>
  );
};

export default PackageSection;
