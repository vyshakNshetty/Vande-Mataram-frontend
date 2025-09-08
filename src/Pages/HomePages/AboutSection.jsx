// src/Components/AboutSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  // This hook tells us when the component is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only run once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <section ref={ref} className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* Left Column (Yellow Box) */}
          <div className="bg-yellow-400 p-8 sm:p-12 text-center text-gray-900 rounded-2xl shadow-xl flex flex-col items-center justify-center h-full">
            <p className="text-xl font-medium">Students Reached</p>
            <div 
              className="text-6xl sm:text-7xl font-bold my-2 text-white" 
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)' }}
            >
              {inView ? <CountUp start={0} end={150000} duration={3} separator="," /> : '0'}
              <span className="text-5xl">+</span>
            </div>
            <p className="text-lg sm:text-xl mt-2 max-w-xs mx-auto">
              Through Workshops, Sessions & Events.
            </p>
            <Link 
              to="/activities" 
              className="mt-8 inline-block bg-white text-gray-800 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              How we started
            </Link>
          </div>

          {/* Right Column (Text Content) */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Who Are We?
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              Vande Mataram Gurukulam is a free residential learning space rooted in the ideals of Swami Vivekananda. Offering a holistic, value-based education, it is run by a team of dedicated youth who came together in 2020 to form Team ADRISHYA, conducting various social outreach drives. Building on this spirit of service, the team established Vande Mataram Gurukulam in 2022 to nurture young minds and shape them into responsible, compassionate citizens.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-8">
              Alongside academic learning in English, we emphasize Samskrutha, regional language, Bharatiya values, and practical life skills. Our focus is to help each child discover their Swadharma (inner talent) and grow into disciplined, compassionate, and patriotic citizens.
            </p>
            <Link 
              to="/about"
              className="mt-8 inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
