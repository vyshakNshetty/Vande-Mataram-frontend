// src/components/SteeringBoardSection.jsx
import React from 'react';

// --- IMAGE PLACEHOLDERS ---
// You will need to replace these with your actual board member photos.
// I've created 9 placeholders for you.
import boardMember1 from '../../assets/SteeringBoardTeam/shubhajaiprakash.jpg'
import boardMember2 from '../../assets/SteeringBoardTeam/member2.jpg'
import boardMember3 from '../../assets/SteeringBoardTeam/Jayashree Ramakrishna.jpg'
import boardMember4 from '../../assets/SteeringBoardTeam/Hasabi.jpg'
import boardMember5 from '../../assets/SteeringBoardTeam/Jagannath Bidrigowdra.jpg'
import boardMember6 from '../../assets/SteeringBoardTeam/girish.jpg'
import boardMember7 from '../../assets/SteeringBoardTeam/shubhajaiprakash.jpg'
import boardMember8 from '../../assets/SteeringBoardTeam/Ranjith.jpg'
import boardMember9 from '../../assets/SteeringBoardTeam/shubhajaiprakash.jpg'

const SteeringBoardSection = () => {
  const boardData = [
    { name: 'Shubha Jaiprakash', image: boardMember1 },
    { name: `Dr.P Subbanna Bhat`, image: boardMember2 },
    { name: 'Jayashree Ramakrishna', image: boardMember3 },
    { name: 'Dr C S Hasabi', image: boardMember4 },
    { name: 'Jagannath Bidrigowdra', image: boardMember5 },
    { name: 'Girish Prabhu S', image: boardMember6 },
    { name: 'Ranjith B R', image: boardMember8 },
    { name: 'Raghavendra B S ', image:'' },
  ];

  return (
    <section className="bg-yellow-400 py-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 font-heading">
            Steering Board Members
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
          {boardData.map((member, index) => (
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
