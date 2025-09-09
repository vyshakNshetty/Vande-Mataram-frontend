import React, { useEffect, useState } from 'react';
import teamMember1 from '../../assets/Team/Madhusudan.png';
import teamMember2 from '../../assets/Team/SAMSKRUTHI.png';
import teamMember3 from '../../assets/Team/DANAMMA.png';
import teamMember4 from '../../assets/Team/NEHA.png';
import axios from 'axios';

const TeamSection = () => {
  
  const [Data,setData]=useState([]);
    
    useEffect(()=>{
      const fetchData=async()=>{
        try {
          const res=await axios.get('http://127.0.0.1:8000/team/')
          setData(res.data)
        } catch (error) {
          alert(err)
        }
      }
      fetchData()
    },[])
    
//   const teamData = [
//     {
//       name: 'MADHUSUDHAN G',
//       role: 'Founder & Trustee of Vande Mataram Gurukulam',
//       bio: ' 30 years old Founder & Trustee of Vande Mataram Gurukulam Mechanical Engineer AMC Engineering College From Bengaluru',
//       image: teamMember1
//     },
//     {
//       name: 'SAMSKRUTHI K',
//       role: 'Trustee of Vande Mataram Gurukulam',
//       bio: `24 years old
// Trustee of Vande Mataram
// Gurukulam
// MA Performing Arts - Christ
// (Deemed To be University)
// From Bengaluru`,
//       image: teamMember2
//     },
//     {
//       name: 'DANAMMA',
//       role: 'Full - time member in Vande Mataram Gurukulam',
//       bio: `25 years old
// Full - time member in Vande
// Mataram Gurukulam
// Diploma Civil Engineering
// From Hubballi`,
//       image: teamMember3
//     },
//     {
//       name:  `NEHA K`,
//       role: `Member in Vande Mataram
// Gurukulam`,
//       bio: `21 yrs old.
// Electronics and Communication
// Engineering student - SDM college of
// Engineering and Technology`,
//       image: teamMember4
//     }
//   ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Data.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img 
                src={member.image} 
                alt={`Photo of ${member.Name}`}
                className="w-32 h-32 object-cover rounded-full shadow-lg mb-6 border-4 border-white"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
                {member.designation}
              </p>
              <p className="mt-4 text-base text-gray-600 leading-7">
                {member.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;