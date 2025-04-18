import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 gap-16 items-start text-center md:text-left">
        {/* Contact Info */}
        <div className="space-y-4 self-start">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:thestorymakerbd@gmail.com"
              className="text-blue-400 hover:underline"
            >
              thestorymakerbd@gmail.com
            </a>
          </p>
          <p>
            <span className="font-medium">Phone:</span> +880 1890-375066

          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            South Banasree, opposite of Dostala Market, Road-9, House-13,
            Block-L, Dhaka, Bangladesh
          </p>
        </div>

        {/* Social Media */}
        <div className="space-y-4 self-start">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.facebook.com/thestorymakeronline"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-950 p-3 rounded-full hover:bg-blue-500 transition"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/thestorymakerofficialbd/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-3 rounded-full hover:bg-pink-400 transition"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@thestorymakerbd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 p-3 rounded-full hover:bg-red-500 transition"
              title="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="space-y-2 self-start text-sm md:text-right text-gray-300">
          <p>&copy; 2024 The Story Maker</p>
          <p className="text-gray-400">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
