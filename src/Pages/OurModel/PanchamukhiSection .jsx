// src/components/PanchamukhiSection.jsx
import React from 'react';

// --- ICONS (No changes here) ---
const BookIcon = () => (
  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  </div>
);

const HeartIcon = () => (
  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  </div>
);

const HandIcon = () => (
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    </div>
  );

const BrainIcon = () => (
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2h-4l-1-1h-4l-1 1H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    </div>
);

const BodyIcon = () => (
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 16.5v-5.5a2.5 2.5 0 015 0v5.5m-5.5 0h5.5m-5.5 0L3 20m2.5-3.5L8 20m9-5h-5.5a2.5 2.5 0 01-5 0V7.5a2.5 2.5 0 015 0v1.5M14.5 11.5h5.5m-5.5 0L12 8m2.5 3.5L17 8" />
      </svg>
    </div>
);

const PanchamukhiSection = () => {
  const panchamukhiData = [
    {
      icon: <BookIcon />,
      title: 'Spiritual',
      description: 'Practices like Agnihotra, Pooja, Bhajans, Shloka chanting, and Surya Vandana instill devotion, inner discipline, and a deep-rooted connection to our spiritual heritage, helping children cultivate peace and purpose.'
    },
    {
      icon: <HeartIcon />,
      title: 'Creative',
      description: 'Art, Dance, Drama, and Music serve as tools for self-expression and cultural connection. Children explore their imagination while learning to communicate emotions and stories with confidence and joy.'
    },
    {
      icon: <HandIcon />,
      title: 'Emotional',
      description: 'Through Bhajans, Seva, animal care, and bonding nature, children develop compassion, empathy, and gratitude — essential traits for a balanced and fulfilling life.'
    },
    {
      icon: <BrainIcon />,
      title: 'Intellectual',
      description: 'Chess, academics, and inquiry-based learning sharpen critical thinking, focus, and curiosity, guiding students to excel in their studies while staying rooted in values.'
    },
    {
      icon: <BodyIcon />,
      title: 'Physical',
      description: 'Practices like Mallakhamba, rope climbing (Hagga Sahasa), Silambam, and sports enhance strength, flexibility, and resilience, nurturing a healthy body and a courageous spirit.'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20 font-sans">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header - More balanced */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading">
            Panchamukhi Shikshana
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            At Vande Mataram Gurukulam, we follow the Panchamukhi model – nurturing every child across five key dimensions:
          </p>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="flex flex-wrap justify-center -mx-3">
          {panchamukhiData.map((item, index) => (
            <div 
              key={index} 
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 p-3 mb-8"
            >
              <div className="h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center">
                {item.icon}
                <h3 className="mt-5 text-lg font-bold text-gray-800 font-heading">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanchamukhiSection;