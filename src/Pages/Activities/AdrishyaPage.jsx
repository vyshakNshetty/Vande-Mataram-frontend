// src/components/AdrishyaSection.jsx
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// --- IMAGE & LOGO PLACEHOLDERS ---
import adrishyaLogo from '../../assets/adrishiyalogo/AdrishyaLogo.png';
import adrishya1 from '../../assets/images/adrishiya1.jpg';
import vv1 from '../../assets/GurukulaActivities/vv1.jpg'
import vv2 from '../../assets/GurukulaActivities/vv2.png'
import vv3 from '../../assets/GurukulaActivities/vv3.JPG'
import vv4 from '../../assets/GurukulaActivities/vv4.JPG'
import vv6 from '../../assets/GurukulaActivities/vv6.JPG'
import cl1 from '../../assets/GurukulaActivities/cl1.JPG'
import cl2 from '../../assets/GurukulaActivities/cl2.JPG'
import cl3 from '../../assets/Slide6/Kargil/kargil.png'
import work1 from '../../assets/GurukulaActivities/work1.JPG'
import work2 from '../../assets/GurukulaActivities/work2.png'
import work3 from '../../assets/GurukulaActivities/work3.png'
import work4 from '../../assets/GurukulaActivities/work4.png'
import work5 from '../../assets/GurukulaActivities/work5.png'
import work6 from '../../assets/GurukulaActivities/work6.png'
import en1 from '../../assets/GurukulaActivities/en2.JPG'
import en3 from '../../assets/GurukulaActivities/en3.JPG'
import en4 from '../../assets/GurukulaActivities/en4.JPG'
import sc1 from '../../assets/GurukulaActivities/sc1.JPG'
import sc2 from '../../assets/GurukulaActivities/sc2.JPG'
import sc3 from '../../assets/GurukulaActivities/sc3.png'
import sc4 from '../../assets/GurukulaActivities/sc4.png'
import sc5 from '../../assets/GurukulaActivities/sc5.png'

// ✅ Directly import volunteer image
import volunteerImage from '../../assets/Adrishya/v.png'
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

const galleryPhotos = [
  adrishya1,
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070',
  'https://images.unsplash.com/photo-1542810634-71277d952594?q=80&w=2070',
  'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964',
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070',
];

const AdrishyaSection = () => {

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

  // const activitiesData = [
  //   { title: 'Vidyavarna Painting', description: 'Transformed 75+ government schools and ashramas with vibrant, educational, and value-based wall art that inspires learning and patriotism.', image: [vv1, vv2, vv3, vv4, vv6] },
  //   { title: 'Cultural Activities', description: 'Conducted 150+ cultural programs across Karnataka like Vande Bharata Mataram, Viveka Bharatha, and Kargil Vijay Diwas to instill national pride.', image: [cl1, cl2,cl3] },
  //   { title: 'Social Awareness', description: 'Organized impactful drives like Vastra Daan, eco-brick making, and patriotic frame crafting using recycled materials.', image: [sc1,sc2,sc3,sc4,sc5] },
  //   { title: 'Workshops & Sessions', description: '500+ sessions on values, leadership, and culture to awaken young minds and build confident, conscious citizens.', image: [work1,work2,work3,work4,work5,work6] },
  //   { title: 'Environment', description: 'Initiatives like seed ball drives, goshala and lake cleaning, and bird water stations to nurture eco-consciousness.', image: [en1,en3,en4] },
  // ];

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