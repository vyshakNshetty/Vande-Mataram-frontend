import React from 'react';
import { Link, useParams } from 'react-router-dom';
import kargil from '../../assets/Slide6/Kargil/kargil.png';
import kanyakumari from '../../assets/Slide6/3.Kanyakumari/Kanyakumari.png';
import culture from '../../assets/images/culture.jpg';

// News data
const allNews = [
  {
    id: 'kargil-vijay-diwas',
    title: 'Kargil Vijay Diwas Celebrations',
    date: 'July 26, 2024',
    image: kargil,
    excerpt: 'Students and staff paid homage to our war heroes...',
    content:
      'Students and staff paid homage to our war heroes with patriotic songs, speeches, and a flag hoisting ceremony. The program included talks by veterans, student performances, and a documentary screening on the Kargil war.',
  },
  {
    id: 'kanyakumari-yatra',
    title: 'Kanyakumari Yatra Completion',
    date: 'August 15, 2024',
    image: kanyakumari,
    excerpt: 'Our team successfully completed the national integration yatra...',
    content:
      'The team spread Swami Vivekananda’s message through cultural interactions, public speeches, and spiritual workshops. Participants shared their learnings and bonded across regions.',
  },
  {
    id: 'annual-cultural-fest',
    title: 'Annual Cultural Fest',
    date: 'September 10, 2024',
    image: culture,
    excerpt: 'Get ready for a vibrant celebration of Indian culture...',
    content:
      'The fest included music, dance, drama, art exhibitions, and traditional food. Students showcased India’s rich diversity through creative and engaging performances.',
  },
];

// News card component
const NewsCard = ({ id, image, title, date, excerpt }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
    <Link to={`/news/${id}`}>
      <img src={image} alt={title} className="w-full h-56 object-cover" />
    </Link>
    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{date}</p>
      <p className="text-gray-700 mt-2">{excerpt}</p>
      <Link
        to={`/news/${id}`}
        className="mt-4 inline-block text-yellow-600 font-semibold hover:text-yellow-700"
      >
        Read More →
      </Link>
    </div>
  </div>
);

const NewsPage = () => {
  const { id } = useParams();

  if (id) {
    const selectedNews = allNews.find((item) => item.id === id);
    const otherNews = allNews.filter((item) => item.id !== id);

    if (!selectedNews) {
      return (
        <div className="pt-24 text-center text-red-600 text-xl font-semibold">
          News not found.
        </div>
      );
    }

    return (
<div className=" min-h-screen pt-24 px-6 max-w-7xl mx-auto ">        {/* Single News Detail View */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
          <div className="md:w-1/2">
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {selectedNews.title}
            </h1>
            <p className="text-sm text-gray-500 mb-4">{selectedNews.date}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{selectedNews.content}</p>
            <div className="mt-6">
              <Link
                to="/news"
                className="text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                ← Back to All News
              </Link>
            </div>
          </div>
        </div>

        {/* Other News */}
        <div className="mb-24">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Other News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherNews.map((item) => (
              <Link
                to={`/news/${item.id}`}
                key={item.id}
                className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded mb-3"
                />
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // All News Grid View
  return (
    <section className="pt-24 bg-gray-50 py-16" >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            All News
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover our latest events, achievements, and announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map((newsItem) => (
            <NewsCard key={newsItem.id} {...newsItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
