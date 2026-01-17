// Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to MyApp
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Build fast, modern & responsive web apps with React.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-white text-amber-600 font-medium rounded hover:bg-gray-100">
            Get Started
          </button>
          <button className="px-6 py-2 border border-white rounded hover:bg-white hover:text-amber-600">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
