// src/pages/ContactPage.jsx
import React, { useEffect, useState } from 'react';

import ContactFormSection from './ContactForm';
import ContactDetailsSection from './Details';
import axios from 'axios';

const ContactPage = () => {
   const [Data,setData]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const res=await axios.get('')
        setData(res.data)
      } catch (error) {
        alert(err)
      }
    }
    fetchData();
  },[])
  const heroImage=Data.image
  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal scroll */}
      {/* Hero Section */}
      <div
        className="relative min-h-[100vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative z-10 max-w-4xl mx-auto px-4 mt-32">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-heading">
            Get in Touch
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-2xl md:mt-5 md:max-w-3xl font-sans">
            We would love to hear from you. Whether you have a question, a suggestion, or want to get involved, please don't hesitate to reach out.
          </p>
        </main>
      </div>

      {/* Contact form and map sections */}
      <section className="relative z-10 bg-white">
        <ContactFormSection />
        <ContactDetailsSection />
      </section>
    </div>
  );
};

export default ContactPage;
