// src/components/SteeringBoardSection.jsx
import React, { useEffect, useState } from 'react';


import axios from 'axios';

const SteeringBoardSection = () => {
    const [Data,setData]=useState([]);
      
      useEffect(()=>{
        const fetchData=async()=>{
          try {
            const res=await axios.get('http://127.0.0.1:8000/steeringboard-team/')
            setData(res.data)
          } catch (error) {
            alert(err)
          }
        }
        fetchData()
      },[])

 

  return (
    <section className="bg-yellow-400 py-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 font-heading">
            Steering Board Members
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
          {Data.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 font-heading">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SteeringBoardSection;
