// src/pages/AboutPage.jsx
import React, { useEffect, useState } from 'react';
import OurPhilosophySection from './OurPhilosophySection';
import heroimg from '../../assets/Backgrounds/home.jpg'
import TeamSection from './TeamSection';
import SteeringBoardSection from './SteeringBoardTeam';
import axios from '../../service/apii';
import { data } from 'react-router-dom';

const AboutPage = () => {
  
  const[heroImageURL,setBg]=useState([]);
 useEffect(() => {
    const fetchBg = async () => {
      try {
        const res = await axios.get('about_bg/');
        if (res.data.length > 0) {
          setBg(res.data[0].bg); // set image URL from API
        }
        else{
          setBg(heroimg)
        }
      } catch (error) {
        setBg(heroimg); // fallback on error too
      }
    };

    fetchBg();
  }, []);
  return (
    <>
      {/* Main Hero Section for the About Page */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImageURL})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative z-10 max-w-4xl mx-auto px-4 mt-32 ">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-heading">
            About Vande Mataram Gurukulam
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-2xl md:mt-5 md:max-w-3xl font-sans">
            Discover the story, mission, and values that drive our commitment to shaping the future through holistic, value-based education.
          </p>
        </main>
      </div>

      {/* The rest of your about page content will go here */}
      {/* For example: Mission/Vision statements, Team section, Our story, etc. */}
<OurPhilosophySection/>
<TeamSection/>
<SteeringBoardSection/>
    </>
  );
};

export default AboutPage;
