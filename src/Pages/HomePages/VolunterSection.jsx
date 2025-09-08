// src/Components/VolunteerSection.jsx

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import volu from '../../assets/images/volu.png'

// IMPORTANT: Updated image URL to something that looks better as a vertical image
// If your image is horizontal, it will still work but might look less balanced.


const VolunteerSection = () => {
  // Hook to trigger the counting animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    // UPDATED: Reduced vertical padding (py-12 sm:py-20)
    <section ref={ref} className="bg-yellow-400 py-8 sm:py-15"> 
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Image Card */}
          <div className="bg-white p-4 rounded-2xl shadow-xl">
            <img 
              src={volu} 
              alt="Group of happy volunteers"
              // UPDATED: Added h-full and w-full for consistent sizing within its container
              // Added lg:h-[450px] to control the height of the image on large screens
              className="rounded-xl w-full h-full object-cover lg:h-[450px]" 
            />
          </div>

          {/* Right Column: Counter and Form */}
          <div className="text-white">
            {/* Animated Counter */}
            {/* UPDATED: Reduced font sizes slightly to help with overall compactness */}
            <h2 className="text-3xl sm:text-4xl font-bold"> 
              Join our young force of{' '}
              <span className="block mt-2">
                {inView ? <CountUp start={0} end={10000} duration={3} separator="," /> : '0'}+
                <span className="text-3xl sm:text-4xl font-medium"> Volunteers</span> 
              </span>
            </h2>
            
            {/* Volunteer Form */}
            <form action="#" method="POST" className="mt-8 space-y-4"> {/* UPDATED: space-y-4 for tighter spacing */}
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b-2 border-white/50 placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b-2 border-white/50 placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors py-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="3" // UPDATED: Reduced rows from 4 to 3 for compactness
                  placeholder="Write your message"
                  className="w-full bg-transparent border-b-2 border-white/50 placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors py-2"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit"
                  className="inline-block bg-white text-yellow-500 font-bold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
