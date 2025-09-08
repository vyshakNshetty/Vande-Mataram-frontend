import React from 'react';

const OurPhilosophySection = () => {
  return (
    <section className="bg-yellow-400 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Philosophy
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          <p className="text-lg text-gray-600 leading-8">
            Inspired by the ideals of Swami Vivekananda, we believe that education is not merely the pursuit of knowledge but a transformative force that shapes character, instills values, and awakens a deep sense of purpose. Through the Gurukulam model, we strive to empower students to discover their Swadharma, realize their highest potential, and emerge as torchbearers of a righteous and progressive society.
          </p>
          <p className="text-lg text-gray-600 leading-8">
            True education lays the foundation for a strong and enlightened nation, fostering a 'Nation First' mindset and nurturing responsible citizens who lead with integrity and serve with unwavering devotion. By integrating experiential learning and real-life opportunities, we inspire young minds to embrace their duties with dedication and excellence, cultivating leaders who uplift society with wisdom, courage, and a commitment to the greater good.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophySection;