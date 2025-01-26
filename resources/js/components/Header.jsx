import React, { useState } from "react";
import { FaHome, FaBlog, FaDownload, FaBars } from "react-icons/fa"; // Import from 'react-icons/fa'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Title */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/" className="hover:text-blue-600">Roshan Lal</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          <a href="/" className="flex items-center text-gray-600 hover:text-blue-600">
            <FaHome className="mr-2" /> Home
          </a>
          <a href="/blogs" className="flex items-center text-gray-600 hover:text-blue-600">
            <FaBlog className="mr-2" /> Blogs
          </a>
        </nav>

        {/* Resume */}
        <div className="hidden md:flex items-center">
          {/* <a href="/cv" className="flex items-center text-gray-600 hover:text-blue-600"> */}
          <a href="https://docs.google.com/document/d/1iMEtZ5d4H5OzpUdcEXAEZdSZmbogvKrpSx4CLVXyDXc/edit?usp=sharing" className="flex items-center text-gray-600 hover:text-blue-600">
            <FaDownload className="mr-2" /> Resume
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50 py-2 px-4">
          <nav className="flex flex-col space-y-2">
            <a href="/" className="text-gray-600 hover:text-blue-600">
              <FaHome className="mr-2 inline" /> Home
            </a>
            <a href="/blogs" className="text-gray-600 hover:text-blue-600">
              <FaBlog className="mr-2 inline" /> Blogs
            </a>
            <a href="/cv" className="text-gray-600 hover:text-blue-600">
              <FaDownload className="mr-2 inline" /> Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
