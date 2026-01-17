// NavBar.jsx
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white cursor-pointer">
          MyApp
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          <li className="cursor-pointer hover:text-amber-500">Home</li>
          <li className="cursor-pointer hover:text-amber-500">About</li>
          <li className="cursor-pointer hover:text-amber-500">Services</li>
          <li className="cursor-pointer hover:text-amber-500">Contact</li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-amber-500 text-white text-sm hover:bg-amber-600"
          >
            {dark ? "Light" : "Dark"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 dark:text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-3 text-gray-700 dark:text-gray-300">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
