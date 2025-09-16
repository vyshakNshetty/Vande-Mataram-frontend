
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroimg from '../../assets/Backgrounds/home.jpg'
import ActivitiesSection from './Activities';
import AboutSection from './AboutSection';
import PillarsSection from './PillerSection'
import NewsSection from './NewsSection';
import VolunteerSection from './VolunterSection';
import axios from '../../service/apii';

const youtubeVideoID = '_0yLQ4H0W1g'; 

const HomePage = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

const[heroImageURL,setBg]=useState([]);
 useEffect(() => {
    const fetchBg = async () => {
      try {
        const res = await axios.get('home_bg/');
        if (res.data.length > 0) {
          setBg(res.data[0].bg); // set image URL from API
        }
      } catch (error) {
        setBg(heroimg); // fallback on error too
      }
    };

    fetchBg();
  }, []);

  return (
    <>
      {/* Main Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url("${heroImageURL}")` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <main className="relative z-10 max-w-4xl mx-auto px-4 mt-50">
          <h1 className="text-2xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl">
            <span className="block My Custom Font">
              A Free Residential Gurukulam Nurturing Holistic Growth Through Value-Based Education
            </span>
          </h1>

          {/* Play Button */}
          <div className="mt-14 max-w-md mx-auto sm:flex sm:justify-center items-center">
            <div className="mt-3 sm:mt-0">
              <button
                onClick={openModal}
                className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full border-2 border-white/50 hover:bg-white/30 transition-all duration-300 group"
                aria-label="Watch live demo"
              >
                <svg
                  className="w-8 h-8 text-white transform transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Sections */}
      <AboutSection />
      <ActivitiesSection />
      <PillarsSection />
 
      <NewsSection />
      <VolunteerSection />

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full text-lg font-bold flex items-center justify-center z-50"
              aria-label="Close video player"
            >
              &times;
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoID}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
