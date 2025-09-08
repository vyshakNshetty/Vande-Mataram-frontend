// src/Pages/ActivityPage.jsx
import React from 'react';
import img1 from '../../assets/OurmodelBaground/BagroundOurmodel.png';
import PanchamukhiSection from './PanchamukhiSection';
import HolisticPathSection from './HolisticPath';
import UniqueFeaturesSection from './UniqueSection';
// You can replace this with an image more relevant to your activities
const heroImageURL = img1; 

const OurModel = () => {
  return (
    <>
      {/* Main Hero Section for Activities */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImageURL})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative z-10 max-w-4xl mx-auto px-4 mt-32">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-heading ">
            <span className="block">Man Making, Nation Building</span>
            
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-2xl md:mt-5 md:max-w-3xl font-sans">
         Built on timeless values, nurtured with purpose, ready to serve the nation
          </p>
        </main>
      </div>
<PanchamukhiSection/>
<HolisticPathSection/>
<UniqueFeaturesSection/>
      {/* You can add the rest of your Activities page content below this line */}
      {/* For example, a grid of activity cards */}
      
    </>
  );
};

export default OurModel;
