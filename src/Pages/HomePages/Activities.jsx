

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';


const ActivityCard = ({ image, tittle, des}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col mx-2"  style={{minHeight: '350px'}} >
    <img src={image} alt={tittle} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-800">{tittle}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{des}</p>
  
    </div>
  </div>
);

// Custom Arrow Components for the Slider
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex items-center justify-center bg-white rounded-full shadow-md w-10 h-10`}
      style={{ ...style, right: '-15px' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex items-center justify-center bg-white rounded-full shadow-md w-10 h-10`}
      style={{ ...style, left: '-15px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const ActivitiesSection = () => {

  const[activitiesData,setactivitiesData]=useState([]);
  useEffect(()=>{
const fetchData=async()=>{
  try {
    const res=await axios.get('http://127.0.0.1:8000/home/act/')
    setactivitiesData(res.data.slice(0,3))
  } catch (error) {
    console.log(error)
  }
}
fetchData()
  },[])
  // Settings for the react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 3000,    // 3 seconds per slide
    pauseOnHover: true,     // Pause autoplay on hover
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl -mt-12">
            Activities at Gurukulam
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Every day at Vande Mataram Gurukulam is an opportunity to live and learn in harmony with nature, tradition, and values.
          </p>
        </div>

        {/* react-slick Slider component */}
        <div className="px-4">
            <Slider {...settings}>
            {/* Map through the activity data */}
            {activitiesData.map((activity, index) => (
              <div key={index} className="py-4">
                <ActivityCard {...activity} />
              </div>
            ))}

            {/* Final "Explore All" card */}
            <div className="py-4">
              <Link 
                to="/activities" 
                className="bg-yellow-400 rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-6 text-center text-gray-900 hover:bg-yellow-500 transition-colors mx-2"
                style={{minHeight: '350px'}} // Ensure same height as other cards
              >
                <h3 className="text-2xl font-bold">Explore All Activities</h3>
                <p className="mt-2">See everything we do to nurture our students.</p>
                <div className="mt-4 text-4xl">→</div>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
