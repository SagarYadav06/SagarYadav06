// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left */}
        <div>
          <h2 className="text-xl font-semibold text-white">MyApp</h2>
          <p className="text-sm mt-2">
            Build modern web apps with React & Tailwind CSS.
          </p>
        </div>

        {/* Center */}
        <div>
          <h3 className="text-lg font-medium text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-lg font-medium text-white mb-2">Follow Us</h3>
          <div className="flex gap-4 text-sm">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
