// src/components/AdrishyaSection.jsx
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// --- IMAGE & LOGO PLACEHOLDERS ---
import adrishyaLogo from '../../assets/adrishiyalogo/AdrishyaLogo.png';

// ✅ Directly import volunteer image
// import volunteerImage from '../../assets/Adrishya/v.png'
import axios from 'axios';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } }
  ]
};

const AdrishyaSection = () => {
  const volunteerImage=''

  const[activitiesData,setActivitiesData]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const res=await axios.get('http://localhost:8000/adrishya/activities/')
        setActivitiesData(res.data)
      } catch (error) {
        alert(error)
      }
    }
fetchData()
  },[])


  const [selectedActivity, setSelectedActivity] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contribution: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your interest in volunteering! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
      contribution: ''
    });
  };

  return (
    <div className="font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-b from-yellow-50 to-white">

      {/* 1. Adrishya Logo Section */}
      <div className="mb-16 sm:mb-20 text-center">
        <img 
          src={adrishyaLogo} 
          alt="Adrishya Logo" 
          className="mx-auto w-48 sm:w-56 md:w-64 lg:w-72 h-auto drop-shadow-md"
        />
        
      </div>

      {/* 2. Our Journey Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-16 sm:mb-20 border border-yellow-200">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-6 text-center">
          Our Journey
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Adrishya was born from a simple yet powerful idea: to channel the vibrant 
          energy of youth towards nation-building. What began as a small group of 
          friends passionate about seva (selfless service) has grown into a dynamic 
          movement of volunteers dedicated to preserving and promoting India's cultural 
          and spiritual heritage. Through our diverse initiatives, we aim to awaken 
          social consciousness, foster environmental responsibility, and instill a 
          sense of national pride in the next generation.
        </p>
      </div>

      {/* 3. Our Initiatives Section */}
      <div className="mb-16 sm:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-700 mb-10">
          Our Initiatives
        </h2>
        <div className="space-y-8">
          {activitiesData.map((activity, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-100"
            >
              {/* Title + Description */}
              <p className="text-gray-700 mb-4">
                <span className="font-bold text-yellow-700">{activity.title} - </span>
                {activity.des}
              </p>

              {/* Slick Slider with images */}
              <Slider
                dots={false}
                infinite={true}
                speed={600}
                slidesToShow={3}
                slidesToScroll={1}
                arrows={true}
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 2 } },
                  { breakpoint: 640, settings: { slidesToShow: 1 } }
                ]}
              >
                {(Array.isArray(activity.image) ? activity.image : [activity.image]).map((img, i) => (
                  <div key={i} className="px-2">
                    <div className="w-full h-40 rounded-lg shadow-md overflow-hidden border-2 border-yellow-200">
                      <img 
                        src={img} 
                        alt={`${activity.title} ${i + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Volunteer Section with Yellow Background */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl shadow-xl p-6 sm:p-8 mb-16 sm:mb-20 border-2 border-yellow-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-800 mb-10">
          Join as a Volunteer
        </h2>
        <div className="mb-10">
          <img
            src={volunteerImage}
            alt="Volunteer group"
            className="w-full h-64 sm:h-72 object-cover rounded-xl shadow-md border-4 border-yellow-400"
          />
        </div>
        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3.5 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-yellow-50"
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3.5 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-yellow-50"
              required
            />
          </div>
          <textarea 
            placeholder="Write your message..." 
            name="message"
            rows="4" 
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3.5 border border-yellow-300 rounded-lg mb-5 focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-yellow-50"
          ></textarea>
          <textarea 
            placeholder="How you want to contribute?" 
            name="contribution"
            rows="3" 
            value={formData.contribution}
            onChange={handleInputChange}
            className="w-full p-3.5 border border-yellow-300 rounded-lg mb-6 focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-yellow-50"
            required
          ></textarea>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3.5 px-10 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Submit
            </button>
            <p className="text-sm text-yellow-800 mt-5">
              After submission, you will receive a WhatsApp message from our bot with a Google Form link for the final steps.
            </p>
          </div>
        </form>
      </div>

      {/* 5. Contact Section */}
      <div className="text-center mb-10 bg-white rounded-2xl p-8 shadow-lg border border-yellow-200">
        <h3 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-6">
          Connect with Adrishya
        </h3>
        <p className="text-gray-700 mb-3">
          Email: <a href="mailto:contact@adrishya.org" className="text-yellow-600 hover:text-yellow-800 hover:underline font-medium">contact@adrishya.org</a>
        </p>
        <p className="text-gray-700 mb-8">
          Phone: <a href="tel:+911234567890" className="text-yellow-600 hover:text-yellow-800 hover:underline font-medium">+91 123 456 7890</a>
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-yellow-500 hover:text-yellow-700 text-2xl transition transform hover:scale-125">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-yellow-500 hover:text-yellow-700 text-2xl transition transform hover:scale-125">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-yellow-500 hover:text-yellow-700 text-2xl transition transform hover:scale-125">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdrishyaSection;