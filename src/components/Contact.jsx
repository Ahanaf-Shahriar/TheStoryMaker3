import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-indigo-50 to-[#F5E1C8]" id="contact">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h2>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-lg text-gray-700">Feel free to reach out through any of the platforms below:</p>
        
        <div className="flex justify-center space-x-6 text-3xl text-white">
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 p-3 rounded-full hover:bg-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="text-gray-700 text-base space-y-2 mt-6">
          <p><strong>Email:</strong> yourname@email.com</p>
          <p><strong>Address:</strong> 1234, Your Street Name, Your City, Bangladesh</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
