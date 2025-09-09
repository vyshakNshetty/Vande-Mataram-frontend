import React, { useEffect, useState } from 'react';
import heroImage from '../../assets/images/img_2.jpg';
import img1 from '../../assets/Adrishya/img1.jpg'
import img2 from '../../assets/Adrishya/img2.jpeg'
import img3 from '../../assets/Adrishya/img3.jpg'
import img4 from '../../assets/Adrishya/img4.jpg'
import img5 from '../../assets/Adrishya/img5.jpg'
import img6 from '../../assets/Adrishya/img6.jpg'
import img7 from '../../assets/Adrishya/img7.jpg'
import img8 from '../../assets/Adrishya/img8.jpg'
import img9 from '../../assets/Adrishya/img9.jpg'
import img10 from '../../assets/Adrishya/img10.jpg'
import img11 from '../../assets/Adrishya/img11.jpg'
import img12 from '../../assets/Adrishya/img12.jpg'
import img13 from '../../assets/Adrishya/img13.jpg'
import img14 from '../../assets/Adrishya/img14.jpg'
import img15 from '../../assets/Adrishya/img15.jpg'
import img16 from '../../assets/Adrishya/img16.jpg'
import img17 from '../../assets/Adrishya/img17.jpg'
import img18 from '../../assets/Adrishya/img18.jpg'
import img19 from '../../assets/Adrishya/img19.jpg'
import img20 from '../../assets/Adrishya/img20.jpg'
import img21 from '../../assets/Adrishya/img21.jpg'
import img22 from '../../assets/Adrishya/img22.jpeg'
import img23 from '../../assets/Adrishya/img23.jpeg'
import img24 from '../../assets/Adrishya/img24.jpg'
import img25 from '../../assets/Adrishya/img25.jpg'
import img26 from '../../assets/Adrishya/img26.jpg'
import img27 from '../../assets/Adrishya/img27.jpg'
import img28 from '../../assets/Adrishya/img28.jpg'
import img29 from '../../assets/Adrishya/img29.jpg'

import i1 from '../../assets/GurukulamPhotos/i1.png'
import i2 from '../../assets/GurukulamPhotos/i2.png'
import i3 from '../../assets/GurukulamPhotos/i3.png'
import i4 from '../../assets/GurukulamPhotos/i4.png'
import i5 from '../../assets/GurukulamPhotos/i5.png'
import i6 from '../../assets/GurukulamPhotos/i6.png'
import i7 from '../../assets/GurukulamPhotos/i7.png'
import i8 from '../../assets/GurukulamPhotos/i8.png'
import i9 from '../../assets/GurukulamPhotos/i9.png'
import i10 from '../../assets/GurukulamPhotos/i10.png'
import i11 from '../../assets/GurukulamPhotos/i11.png'
import i12 from '../../assets/GurukulamPhotos/i12.png'
import i13 from '../../assets/GurukulamPhotos/i13.png'
import i14 from '../../assets/GurukulamPhotos/i14.png'
import i15 from '../../assets/GurukulamPhotos/i15.png'
import i16 from '../../assets/GurukulamPhotos/i16.png'
import i17 from '../../assets/GurukulamPhotos/i17.png'
import i18 from '../../assets/GurukulamPhotos/i18.png'
import i19 from '../../assets/GurukulamPhotos/i19.png'
import i20 from '../../assets/GurukulamPhotos/i20.png'
import i21 from '../../assets/GurukulamPhotos/i21.png'
import axios from 'axios';

// -------------------- Gurukula --------------------
const gurukulamImages = [
  { url: i1, date: '2024-07-10' },
  { url: i2, date: '2024-06-15' },
  { url: i3, date: '2024-08-05' },
  { url: i4, date: '2024-05-25' },
  { url: i5, date: '2024-05-25' },
  { url: i6, date: '2024-05-25' },
  { url: i7, date: '2024-05-25' },
  { url: i8, date: '2024-05-25' },
  { url: i9, date: '2024-05-25' },
  { url: i10, date: '2024-05-25' },
  { url: i11, date: '2024-05-25' },
  { url: i12, date: '2024-05-25' },
  { url: i13, date: '2024-05-25' },
  { url: i14, date: '2024-05-25' },
  { url: i15, date: '2024-05-25' },
  { url: i16, date: '2024-05-25' },
  { url: i17, date: '2024-05-25' },
  { url: i18, date: '2024-05-25' },
  { url: i19, date: '2024-05-25' },
  { url: i20, date: '2024-05-25' },
  { url: i21, date: '2024-05-25' },
];

// -------------------- Adrishya --------------------
const ADRISHYA_IMAGES = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
  img12,img13,img14,img15,img16,img17,img18,img19,
  img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,
]

const PREVIEW_COUNT = 6; // 5 images + "+N more" tile

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('gurukula');
  const [selectedImage, setSelectedImage] = useState(null);
  const [sortOrder, setSortOrder] = useState('newest');

  // --- Adrishya collapse/expand ---
  const [adrishyaShowAll, setAdrishyaShowAll] = useState(false);

  const totalAdrishya = ADRISHYA_IMAGES.length;
  const hasMoreAdrishya = totalAdrishya > PREVIEW_COUNT;
  const previewAdrishya = hasMoreAdrishya
    ? ADRISHYA_IMAGES.slice(0, PREVIEW_COUNT - 1)
    : ADRISHYA_IMAGES.slice(0, PREVIEW_COUNT);
  const adrishyaVisible = adrishyaShowAll ? ADRISHYA_IMAGES : previewAdrishya;
  const adrishyaRemaining = hasMoreAdrishya ? totalAdrishya - (PREVIEW_COUNT - 1) : 0;

  // --- Gurukula collapse/expand ⭐ NEW ---
  const [gurukulaShowAll, setGurukulaShowAll] = useState(false);
  const PREVIEW_GURUKULA = 6;
  const totalGurukula = gurukulamImages.length;
  const hasMoreGurukula = totalGurukula > PREVIEW_GURUKULA;
  const previewGurukula = hasMoreGurukula
    ? gurukulamImages.slice(0, PREVIEW_GURUKULA - 1)
    : gurukulamImages.slice(0, PREVIEW_GURUKULA);
  const gurukulaVisible = gurukulaShowAll ? gurukulamImages : previewGurukula;
  const gurukulaRemaining = hasMoreGurukula ? totalGurukula - (PREVIEW_GURUKULA - 1) : 0;

  // --- Sort Gurukula ---
  const renderedGurukulaImages = [...gurukulaVisible].sort((a, b) =>
    sortOrder === 'newest'
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date)
  );

  // --- Modal ---
  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

   const [Data,setData]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const res=await axios.get('http://127.0.0.1:8000/bg_images/4/')
        setData(res.data)
      } catch (error) {
        alert(err)
      }
    }
    fetchData();
  },[])
  const heroImage=Data.image
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Our Gallery</h1>
          <p className="mt-6 text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            A glimpse into our world of learning, service, and growth.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <div className="flex p-1 bg-gray-200 rounded-full">
              <button
                onClick={() => {
                  setActiveTab('gurukula');
                  setAdrishyaShowAll(false);
                }}
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === 'gurukula' ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-500'
                }`}
              >
                Gurukulam
              </button>
              <button
                onClick={() => setActiveTab('adrishya')}
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === 'adrishya' ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-500'
                }`}
              >
                Adrishya
              </button>
            </div>
          </div>

          {/* Sort (only for Gurukula) */}
          {activeTab === 'gurukula' && (
            <div className="flex justify-end mb-8">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-400"
              >
                <option value="newest">Sort by: Newest First</option>
                <option value="oldest">Sort by: Oldest First</option>
              </select>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gurukula Tab */}
            {activeTab === 'gurukula' &&
              renderedGurukulaImages.map((image, index) => (
                <button
                  key={`g-${index}`}
                  type="button"
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                  onClick={() => openImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={`gurukula gallery image ${index + 1}`}
                    className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </button>
              ))}

            {/* "+N more" tile for Gurukula ⭐ */}
            {activeTab === 'gurukula' && !gurukulaShowAll && hasMoreGurukula && (
              <button
                type="button"
                onClick={() => setGurukulaShowAll(true)}
                className="relative overflow-hidden rounded-2xl shadow-lg group bg-white border border-dashed border-gray-300 flex items-center justify-center"
                style={{ minHeight: '20rem' }}
                aria-label={`Show ${gurukulaRemaining} more images`}
              >
                <span className="text-2xl font-bold text-gray-700">+{gurukulaRemaining} more</span>
              </button>
            )}

            {/* Adrishya Tab */}
            {activeTab === 'adrishya' &&
              adrishyaVisible.map((src, idx) => (
                <button
                  key={`a-${idx}`}
                  type="button"
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                  onClick={() => openImage(src)}
                >
                  <img
                    src={src}
                    alt={`adrishya gallery image ${idx + 1}`}
                    className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </button>
              ))}

            {/* "+N more" tile for Adrishya */}
            {activeTab === 'adrishya' && !adrishyaShowAll && hasMoreAdrishya && (
              <button
                type="button"
                onClick={() => setAdrishyaShowAll(true)}
                className="relative overflow-hidden rounded-2xl shadow-lg group bg-white border border-dashed border-gray-300 flex items-center justify-center"
                style={{ minHeight: '20rem' }}
                aria-label={`Show ${adrishyaRemaining} more images`}
              >
                <span className="text-2xl font-bold text-gray-700">+{adrishyaRemaining} more</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Floating Collapse button for Gurukula ⭐ */}
      {activeTab === 'gurukula' && gurukulaShowAll && (
        <button
          type="button"
          onClick={() => setGurukulaShowAll(false)}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-lg hover:bg-black transition"
          aria-label="Collapse Gurukula gallery"
        >
          Collapse
        </button>
      )}

      {/* Floating Collapse button for Adrishya */}
      {activeTab === 'adrishya' && adrishyaShowAll && (
        <button
          type="button"
          onClick={() => setAdrishyaShowAll(false)}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-lg hover:bg-black transition"
          aria-label="Collapse Adrishya gallery"
        >
          Collapse
        </button>
      )}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeImage}>
          <button onClick={closeImage} className="absolute top-4 right-4 text-white text-4xl font-bold" aria-label="Close image viewer">
            &times;
          </button>
          <div className="relative max-w-7xl p-6">
            <img src={selectedImage} alt="Full screen view" className="w-full h-auto max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
