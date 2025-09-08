// src/Components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// --- DATA for the footer ---
// This makes it easy to update content late

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 ">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">About Us</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Vande Mataram Gurukulam is a residential learning space rooted in Indian culture, nurturing holistic development through value-based education, self-reliance, and spiritual growth.
            </p>
            <Link to="/about" className="mt-4 inline-block text-yellow-400 hover:text-yellow-300 transition-colors">
              Read More
            </Link>
          </div>

        

          {/* Column 3: Get Connected */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">Get Connected</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Vande Mataram Gurukulam, Mysuru District, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+919876543210" className="hover:text-yellow-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:contact@vandemataramgurukulam.org" className="hover:text-yellow-400 transition-colors">contact@vandemataramgurukulam.org</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Sub-footer */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} All rights reserved | Vande Mataram Gurukulam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
