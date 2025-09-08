// src/components/ContactDetailsSection.jsx
import React from 'react';

// Simple SVG Icons for each contact method
const LocationIcon = () => (
  <svg className="w-10 h-10 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const EmailIcon = () => (
  <svg className="w-10 h-10 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const PhoneIcon = () => (
  <svg className="w-10 h-10 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);


const ContactDetailsSection = () => {
  return (
    <section className="bg-gray-50 py-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 font-heading">
            Contact Details
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
          
          {/* Address Column */}
          <div className="flex flex-col items-center">
            <LocationIcon />
            <h3 className="text-xl font-bold text-gray-800 font-heading">Address</h3>
            <p className="mt-2 text-base text-gray-600">
               Thimmapur-M-Tadakod, <br />  
             Khanapur-M-Tadakod,<br />
             Karnataka 581105
            </p>
          </div>

          {/* Email Column */}
          <div className="flex flex-col items-center">
            <EmailIcon />
            <h3 className="text-xl font-bold text-gray-800 font-heading">Email</h3>
            <a href="mailto:contact@vmgurukulam.org" className="mt-2 text-base text-indigo-600 hover:underline">
              contact@vmgurukulam.org
            </a>
          </div>

          {/* Phone Column */}
          <div className="flex flex-col items-center">
            <PhoneIcon />
            <h3 className="text-xl font-bold text-gray-800 font-heading">Phone</h3>
            <a href="tel:+919916963664" className="mt-2 text-base text-indigo-600 hover:underline">
              +91 99169 63664
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;