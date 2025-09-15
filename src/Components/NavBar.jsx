import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Logo from '../assets/logo/logo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const logo=Logo;
  const location = useLocation();

  // Detect scroll to change navbar background and text color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if current path is /news or /news/:id
  const isNewsPage = location.pathname === "/news" || location.pathname.startsWith("/news/") ;

  // If on news page, force navbar background and text to non-transparent
  const navbarBackgroundClass = isNewsPage || scrolled ? "bg-white shadow-md" : "bg-transparent";

  // Adjust text colors for links and logo based on transparency
  const textColorClass = isNewsPage || scrolled ? "text-black" : "text-white";

  // Desktop link styles
  const navLinkStyles = ({ isActive }) =>
    `font-medium pb-1 border-b-2 transition-colors duration-300 ${
      isActive
        ? isNewsPage || scrolled
          ? "border-black text-black"
          : "border-white text-white"
        : isNewsPage || scrolled
        ? "border-transparent text-black hover:text-gray-700"
        : "border-transparent text-white hover:text-gray-300"
    }`;

  // Mobile link styles
  const mobileNavLinkStyles = ({ isActive }) =>
    `block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive ? "bg-gray-700 text-white" : "text-white hover:bg-gray-700"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBackgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Vande Mataram Gurukulam Logo"
                className="h-10 w-auto sm:h-12 object-contain"
              />
              <span
                className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300 ${textColorClass}`}
              >
                VANDE MATARAM GURUKULAM
              </span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/model" className={navLinkStyles}>
              OurModel
            </NavLink>
            <NavLink to="/activities" className={navLinkStyles}>
              Activities
            </NavLink>
            <NavLink to="/gallery" className={navLinkStyles}>
              Gallery
            </NavLink>
            <NavLink to="/support" className={navLinkStyles}>
              Support Us
            </NavLink>
            <NavLink to="/about" className={navLinkStyles}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkStyles}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${textColorClass}`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden w-full bg-gray-900/90 backdrop-blur-sm`}
      >
        <div className="px-2 pt-3 pb-4 space-y-2 sm:px-3">
          <NavLink
            to="/"
            className={mobileNavLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/model"
            className={mobileNavLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            OurModel
          </NavLink>
          <NavLink
            to="/activities"
            className={mobileNavLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            Activities
          </NavLink>
          <NavLink
            to="/gallery"
            className={mobileNavLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/support"
            className={mobileNavLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            Support Us
          </NavLink>
          <NavLink
            to="/about"
            className={mobileNavLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={mobileNavLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
