// src/Pages/ActivityPage.jsx
import React, { useEffect, useState } from 'react';
import CoreActivitiesSection from './CoreActivities';
import AdrishyaSection from './AdrishyaPage';
import axios from '../../service/apii';
import heroimg from '../../assets/Backgrounds/home.jpg'

const gurukulaRoutine = [
  { time: '4:30 AM', activity: 'Wake up & Nithya Karma' },
  { time: '5:30 AM', activity: 'Math Class' },
  { time: '6:30 AM', activity: 'Yoga' },
  { time: '8:00 AM', activity: 'Bath, Surya Vandana' },
  { time: '8:45 AM', activity: 'Pooja' },
  { time: '9:00 AM', activity: 'Breakfast' },
  { time: '9:30 AM', activity: 'Shramadhana' },
  { time: '10:45 AM', activity: 'Prayer' },
  { time: '11:00 AM', activity: 'Revision & Preparation' },
  { time: '12:00 PM', activity: 'Academics Class' },
  { time: '2:00 PM', activity: 'Lunch & Shramadhana' },
  { time: '3:00 PM', activity: 'Kala Classes' },
  { time: '4:00 PM', activity: 'Sports' },
  { time: '5:30 PM', activity: 'Surya Vandana' },
  { time: '5:45 PM', activity: 'Agnihothra & Bhajans' },
  { time: '6:30 PM', activity: 'Dinner' },
  { time: '7:30 PM', activity: 'Swadhyaya' },
  { time: '8:30 PM', activity: 'Lights Off' },
];

const ActivityPage = () => {
  const [activeTab, setActiveTab] = useState('adrishya');
  const [Data,setData]=useState([]);
const routineImage=''
 const[heroImageURL,setBg]=useState([]);
 useEffect(() => {
    const fetchBg = async () => {
      try {
        const res = await axios.get('activities_bg/');
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
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImageURL})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative z-10 max-w-4xl mx-auto px-4 mt-32">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-heading ">
            <span className="block">Learning By Living</span>

          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-2xl md:mt-5 md:max-w-3xl font-sans">
            Where values meet action, and learning shapes lives.
          </p>
        </main>
      </div>

      {/* Activities Toggle Section */}
      <section className="bg-gray-50 py-20 font-sans">
        <div className="container mx-auto px-6">
          
          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="flex p-1 bg-gray-200 rounded-full">
              <button
                onClick={() => setActiveTab('gurukula')}
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === 'gurukula' ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-500'
                }`}
              >
                Gurukulam
              </button>
              <button
                onClick={() => setActiveTab('adrishya')}
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === 'adrishya' ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-500'
                }`}
              >
                Adrishya
              </button>
            </div>
          </div>

          {/* Conditional Content */}
          <div>
            {activeTab === 'gurukula' ? (
              // MODIFIED: Use a React Fragment to render both sections
              <>
                {/* Section 1: Daily Routine */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                  <div className="flex justify-center">
                    <img src={routineImage} alt="Daily Routine at Gurukulam" className="rounded-lg shadow-md max-w-sm w-full"/>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 font-heading mb-4 text-center md:text-left">A Day at Gurukulam</h2>
                    <p className="text-lg text-gray-600 mb-8 text-center md:text-left">
                      Each day is woven with purposeful activities designed to awaken discipline, joy, awareness, and inner strength in every child.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
                      {gurukulaRoutine.map((item, index) => (
                        <div key={index} className="flex">
                          <span className="w-24 font-semibold text-gray-700">{item.time}</span>
                          <p className="text-gray-800 flex-1 ml-2">{item.activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 2: Core Activities (Now correctly placed) */}
                <CoreActivitiesSection />
              </>
            ) : (
              // Adrishya Section
              <AdrishyaSection />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityPage