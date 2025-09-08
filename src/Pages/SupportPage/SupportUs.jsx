// src/pages/SupportUsPage.jsx
import React from 'react';
import ContributionSection from './ContributionSection';
// --- IMAGE PLACEHOLDER ---
// You should replace this with a powerful, relevant image for your support page.
import heroImage from '../../assets/images/donate.png' 

const SupportUsPage = () => {
  return (
    <>
      {/* Main Hero Section for Support Page */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative z-10 max-w-4xl mx-auto px-4 mt-35">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-heading">
            Support Our Mission
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-2xl md:mt-5 md:max-w-3xl font-sans">
          Educate and raise the masses, and thus alone a nation is possible
          </p>
          {/* You can add a primary "Donate Now" button here later */}
          {/* For example:
            <div className="mt-10">
              <a href="/donate-form" className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition duration-300 text-lg">
                Donate Now
              </a>
            </div>
          */}
        </main>
        
      </div>

      {/* The rest of your support page content will go here */}
      {/* For example: Donation forms, impact stories, transparency reports, etc. */}
<ContributionSection/>
    </>
  );
};

export default SupportUsPage;
