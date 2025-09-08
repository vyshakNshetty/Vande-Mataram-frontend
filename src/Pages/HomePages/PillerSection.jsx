// src/Components/PillarsSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// A reusable component for each info card.
const PillarCard = ({ icon, title, children, linkTo, linkText }) => (
  <div className="flex items-start space-x-5">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-1 text-gray-600">
        {children}
      </p>
      <Link
        to={linkTo}
        className="mt-3 inline-block font-semibold text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 transition-colors duration-300"
      >
        {linkText}
      </Link>
    </div>
  </div>
);

const PillarsSection = () => {
  return (
    <section className="bg-white py-15 sm:py-28 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12">
          
          {/* Our Vision */}
          <PillarCard
            icon={
              <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.433-7.468a1.012 1.012 0 011.724 0l4.433 7.468a1.012 1.012 0 010 .639l-4.433 7.468a1.012 1.012 0 01-1.724 0L2.036 12.322z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            title="Our Vision"
            linkTo="/about"
            linkText="Learn More"
          >
            Education for Social Transformation — to awaken the potential of every child through value-based education rooted in Indian culture, tradition, and self-reliance.
          </PillarCard>
          
          {/* Support a Cause */}
          <PillarCard
            icon={
              <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            }
            title="Support a Cause"
            linkTo="/support"   // ← route for SupportPage/ContributionSection.jsx
            linkText="Contribute Now"
          >
            Your contribution helps provide food, shelter, and holistic education to children from underserved communities across rural Karnataka.
          </PillarCard>

          {/* Volunteer With Us */}
          <PillarCard
            icon={
              <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.14-4.244a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm-2.122 4.242v.001M15.182 15.182a4.5 4.5 0 01-6.364 0 4.5 4.5 0 010-6.364l6.364-6.364a4.5 4.5 0 016.364 6.364l-6.364 6.364z" />
              </svg>
            }
            title="Volunteer With Us"
            linkTo="/volunteer" // ← route for HomePages/VolunterSection.jsx
            linkText="Join the Movement"
          >
            Join as a mentor, teacher, or supporter. Your time and skills can help shape the next generation of conscious citizens.
          </PillarCard>
          
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
