
import React, { useEffect, useState } from 'react';

import axios from 'axios';

const CoreActivitiesSection = () => {
  const [activitiesData,setActivitiesData]= useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const res=await axios.get('http://localhost:8000/gukulam_activities/')
        setActivitiesData(res.data)
      } catch (error) {
        alert(error)
      }
    }
    fetchData()

  },[])
  //   {
  //     title: 'Yoga, Pranayama & Meditation',
  //     description: 'Daily sessions to foster physical vitality, mental calmness, and spiritual awareness among children.',
  //     image: yogaImage,
  //   },
  //   {
  //     title: 'Sports',
  //     description: 'Encouraging teamwork, discipline, and physical fitness through various traditional and modern games.',
  //     image: sportsImage,
  //   },
  //   {
  //     title: 'Arts',
  //     description: 'Nurturing creativity and self-expression through music, dance, drama, and other visual arts.',
  //     image: artsImage,
  //   },
  //   {
  //     title: 'Academics',
  //     description: 'Providing a strong educational foundation with a focus on inquiry-based learning and critical thinking.',
  //     image: academicsImage,
  //   },
  //   {
  //     title: 'Spiritual',
  //     description: 'Cultivating inner growth and core values through chanting, scriptural studies, and reflective practices.',
  //     image: spiritualImage,
  //   },
  //   {
  //     title: 'Philosophical',
  //     description: 'Engaging in dialogues and discussions that explore timeless wisdom and help develop a mature worldview.',
  //     image: philosophicalImage,
  //   },
  // ];

  return (
    <section className="bg-white py-20 font-sans">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 font-heading">
            Core Activities at Gurukulam
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our daily and weekly routines cultivate the head, heart, and hands of every child through immersive, value-based practices.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {activitiesData.map((activity, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 font-heading mb-2">
                  {activity.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {activity.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreActivitiesSection;
