import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../../service/apii';

const NewsCard = ({ id, image, news_name, date, description }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
    <Link to={`/news/${id}`}>
      <img src={image} alt={news_name} className="w-full h-56 object-cover" />
    </Link>
    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-800">{news_name}</h3>
      <p className="text-sm text-gray-500 mt-1">{date}</p>
      <p className="text-gray-700 mt-2">{description?.slice(0, 100)}...</p>
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
  const [newsList, setNewsList] = useState([]); // all news
  const [singleNews, setSingleNews] = useState(null); // single news

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          // Fetch single news when id is present
          const res = await axios.get(`/news/${id}/`);
          setSingleNews(res.data);
        } else {
          // Fetch all news
          const res = await axios.get('/news/');
          setNewsList(res.data);
        }
      } catch (err) {
        console.error('Error fetching news:', err);
      }
    };

    fetchData();
  }, [id]);

  // ✅ Single News Page
  if (id) {
    if (!singleNews) {
      return (
        <div className="pt-24 text-center text-gray-500 text-xl font-semibold">
          Loading news...
        </div>
      );
    }

    const otherNews = newsList.filter((item) => item.id !== singleNews.id);

    return (
      <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto">
        {/* Single News Detail View */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
          <div className="md:w-1/2">
            <img
              src={singleNews.image}
              alt={singleNews.news_name}
              className="w-full rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {singleNews.news_name}
            </h1>
            <p className="text-sm text-gray-500 mb-4">{singleNews.date}</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {singleNews.description}
            </p>
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
        {otherNews.length > 0 && (
          <div className="mb-24">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Other News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherNews.map((item) => (
                <Link
                  to={`/news/${item.id}`}
                  key={item.id}
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.news_name}
                    className="h-40 w-full object-cover rounded mb-3"
                  />
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.news_name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ✅ All News Page
  return (
    <section className="pt-24 bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            All News
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover our latest events, achievements, and announcements.
          </p>
        </div>

        {newsList.length === 0 ? (
          <p className="text-center text-gray-500">No news available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((newsItem) => (
              <NewsCard key={newsItem.id} {...newsItem} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsPage;
