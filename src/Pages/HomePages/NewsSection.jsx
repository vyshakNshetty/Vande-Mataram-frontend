import React from 'react';
import { Link } from 'react-router-dom';
import kargil from '../../assets/Slide6/Kargil/kargil.png';
import kanyakumari from '../../assets/Slide6/3.Kanyakumari/Kanyakumari.png';
import culture from '../../assets/images/culture.jpg';

// --- LATEST NEWS DATA with IDs ---
const newsData = [
  {
    id: 'kargil-vijay-diwas',
    image: kargil,
    title: 'Kargil Vijay Diwas Celebrations',
    date: 'July 26, 2024',
    excerpt: 'Students and staff paid homage to our war heroes with patriotic songs, speeches, and a flag hoisting ceremony.',
  },
  {
    id: 'kanyakumari-yatra',
    image: kanyakumari,
    title: 'Kanyakumari Yatra Completion',
    date: 'August 15, 2024',
    excerpt: 'Our team successfully completed the national integration yatra, spreading Swami Vivekananda\'s message across the country.',
  },
  {
    id: 'annual-cultural-fest',
    image: culture,
    title: 'Upcoming: Annual Cultural Fest',
    date: 'September 10, 2024',
    excerpt: 'Get ready for a vibrant celebration of Indian culture with student performances, music, and art displays.',
  },
];

// --- News Card Component ---
const NewsCard = ({ id, image, title, date, excerpt }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    <Link to={`/news/${id}`}>
      <img src={image} alt={title} className="w-full h-56 object-cover" />
    </Link>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{date}</p>
      <p className="mt-3 text-gray-600 leading-relaxed">{excerpt}</p>
      <Link
        to={`/news/${id}`}
        className="mt-4 inline-block font-semibold text-yellow-500 hover:text-yellow-600 transition-colors"
      >
        Read More
      </Link>
    </div>
  </div>
);

// --- News Section Component ---
const NewsSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Latest News</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Stay updated with our recent events, achievements, and upcoming activities.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((newsItem) => (
            <NewsCard key={newsItem.id} {...newsItem} />
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-16">
          <Link
            to="/news"
            className="inline-block bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-lg shadow-lg"
          >
            View All News
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
