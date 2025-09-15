import React from 'react';


const HolisticPathSection = () => {
  const holisticPathImage=''
  return (
    <section className="bg-yellow-400 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* Image Column */}
          <div className="flex justify-center lg:justify-start h-full">
            <img 
              src={holisticPathImage} 
              alt="Students engaged in a holistic learning activity" 
              className="w-full max-w-lg h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Text Column */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Holistic Path
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              At Vande Mataram Gurukulam, academic learning goes hand-in-hand with our value-based education. We follow the NIOS (National Institute of Open Schooling) curriculum, providing students the flexibility to learn at their own pace. Every child is enrolled under the NIOS board and guided to appear for national-level examinations.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-8">
              Beyond the classroom, students are encouraged to pursue certifications, diploma programs, and specialized courses aligned with their swadharma (inner talent, skills and interests) — whether in arts, sports, sciences, or traditional knowledge systems. Additional coaching and mentorship are provided to support their unique learning paths.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-8">
              The Gurukulam takes complete responsibility for each child's academic journey until graduation, ensuring they are equipped with knowledge, values, and confidence to thrive in the modern world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HolisticPathSection;