import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../service/apii';


// --- News Card Component ---
const NewsCard = ({ id, image, news_name, date, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    <Link to={`/news/${id}`}>
      <img src={image} alt={news_name} className="w-full h-56 object-cover" />
    </Link>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{news_name}</h3>
      <p className="mt-2 text-sm text-gray-500">{date}</p>
      {/* <p className="mt-3 text-gray-600 leading-relaxed">{description}</p> */}
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
const[data,setData]=useState([])
const[allnews,setAllnews]=useState([])
useEffect(()=>{
const fetchDatas=async()=>{
  try {
    const result=await axios.get('/news/')
    setData(result.data.slice(0, 3))
    setAllnews(result.data)
    
  } catch (error) {
    alert(error)
  }
}
fetchDatas()
},[])

  return (
    <section className="bg-gray-50 py-10 sm:py-5">
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
          {data.map((newsItem) => (
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
