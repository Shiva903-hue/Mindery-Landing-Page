import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for mobile menu

function Navbar({ onStartTrial }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50 animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-purple-600 opacity-0 animate-fade-in delay-100">
            <span className="flex items-center transform transition-all duration-300 hover:scale-110 cursor-pointer">
              Mindery
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Why", "Program", "Pricing", "Reviews", "FAQ"].map((item, index) => {
              return (
                <a
                  key={item}
                  href="#parentTeacherHub"
                  className="text-purple-700 hover:text-green-600 font-bold transition-all duration-300 relative group opacity-0 animate-fade-in cursor-pointer transform hover:scale-105"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex opacity-0 animate-fade-in delay-700">
            <button
              onClick={onStartTrial}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center opacity-0 animate-fade-in delay-300">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="transform transition-all duration-300 hover:scale-110 active:scale-95 p-1 rounded-md hover:bg-gray-100"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 space-y-4">
          {["Why", "Program", "Pricing", "Reviews", "FAQ"].map((item, index) => {
            return (
              <a
                key={item}
                href="#why"
                className={`block text-gray-700 font-bold hover:text-green-600 transition-all duration-300 transform hover:translate-x-2 hover:scale-105 cursor-pointer ${
                  isOpen ? 'animate-slide-in-left' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            );
          })}
          <button
            onClick={onStartTrial}
            className={`w-full bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group ${
              isOpen ? 'animate-slide-in-left delay-500' : ''
            }`}
          >
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

    
    </nav>
  );
}

export default Navbar;