import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
    
        <div>
          <h2 className="text-2xl font-bold text-white">FoodZone</h2>
          <p className="mt-3 text-sm">
            Delicious food delivered to your doorstep. Fast, fresh & tasty.
          </p>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@foodzone.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: New Delhi, India</li>
          </ul>
        </div>

      </div>


      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} FoodZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
