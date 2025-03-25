import React, { useState } from "react";

const PackageSection = () => {
  // State to track which package is expanded
  const [expanded, setExpanded] = useState(null);

  // Function to toggle details for a package
  const toggleDetails = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="container mx-auto py-12" id="packages">
      <h2 className="text-3xl font-bold text-center mb-8">Our Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
        {/* Package Boxes */}
        {[
          { name: "Basic", price: "$49", details: ["Feature 1", "Feature 2", "Feature 3", "Feature"] },
          { name: "Standard", price: "$99", details: ["Feature A", "Feature B", "Feature C"] },
          { name: "Premium", price: "$199", details: ["Feature X", "Feature Y", "Feature Z"] },
        ].map((pkg, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center p-6 w-64 border-2 border-beige bg-white shadow-lg rounded-lg transition-all duration-300 ${
              expanded === index ? "h-auto pb-4" : "h-64"
            }`}
          >
            <h1 className="text-xl font-bold">{pkg.name}</h1>
            <p className="text-gray-600 mt-2">{pkg.price}</p>

            {/* View Details Button */}
            <button
              onClick={() => toggleDetails(index)}
              className="mt-4 flex items-center bg-amber-100 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            >
              View Details
              <svg
                className={`w-5 h-5 ml-2 transform ${
                  expanded === index ? "rotate-180" : "rotate-0"
                } transition-transform`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Details Section */}
            {expanded === index && (
              <ul className="mt-4 space-y-2 text-gray-700">
                {pkg.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
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
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageSection;
