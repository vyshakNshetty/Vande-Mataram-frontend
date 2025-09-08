// src/components/ContributionSection.jsx
import React from 'react';

// --- IMAGE PLACEHOLDER ---
// You must replace this with the actual path to your QR code image.
import qrCodeImage from '../../assets/images/image.png'; 

const ContributionSection = () => {
  const contributionTiers = [
    {
      title: 'Tanu',
      description: 'Join us in our Day to Day Activities.',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-800'
    },
    {
      title: 'Mana',
      description: "Help us design the student's future blending the best of Ancient Indian wisdom and 21st-century needs.",
      color: 'bg-orange-100',
      textColor: 'text-orange-800'
    },
    {
      title: 'Dhana',
      description: 'Provide Monetary support, Individual Time and Energy as a resource person & Spreading the word.',
      color: 'bg-blue-100',
      textColor: 'text-blue-800'
    }
  ];

  return (
    <section className="bg-white py-20 font-sans">
      <div className="container mx-auto px-6">
        
        {/* "Tanu, Mana, Dhana" Section */}
        <div className="max-w-4xl mx-auto mb-16 p-6 border-2 border-gray-200 rounded-lg">
          <div className="space-y-4">
            {contributionTiers.map((tier) => (
              <div key={tier.title} className={`flex items-center p-4 rounded-lg ${tier.color}`}>
                <div className={`w-24 text-center flex-shrink-0 font-bold ${tier.textColor}`}>
                  {tier.title}
                </div>
                <p className={`ml-4 text-base md:text-lg ${tier.textColor}`}>
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 font-heading text-center mb-12">
          Contribute
        </h2>

        {/* Payment and Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto items-start">
          
          {/* QR Code Column */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-700 font-heading mb-4">Scan to Pay</h3>
            <div className="p-2 border rounded-lg bg-white shadow-md">
              <img src={qrCodeImage} alt="QR Code for payment" className="w-60 h-auto"/>
            </div>
          </div>
          
          {/* Bank Details Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-700 font-heading mb-4">Bank Transfer</h3>
            <div className="space-y-3 text-base text-gray-600">
              <p><span className="font-semibold text-gray-800">Account Name:</span> VANDE MATARAM GURUKULAM TRUST</p>
              <p><span className="font-semibold text-gray-800">Bank:</span> Axis Bank</p>
              <p><span className="font-semibold text-gray-800">Account Number:</span> 922020058132794</p>
              <p><span className="font-semibold text-gray-800">IFS Code:</span> UTIB0003567</p>
              <p><span className="font-semibold text-gray-800">Branch Name:</span> (CATRS) Jayanagar 3rd BNG KT</p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-700 font-heading mb-4">Through any other means</h3>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold text-gray-800 text-lg">Contact:</p>
              <p className="text-xl font-mono">99169 63664</p>
              <p className="text-xl font-mono">8217474419</p>
              <p className="text-xl font-mono">9036110872</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContributionSection;
