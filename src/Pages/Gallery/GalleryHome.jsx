import React, { useEffect, useState } from 'react';
import heroimg from '../../assets/Backgrounds/home.jpg'
import axios from '../../service/apii'

const PREVIEW_COUNT = 6; 

const GalleryPage = () => {
  const[gurukulamImages,setgurukulaImages]=useState([])
const[ADRISHYA_IMAGES,setADRISHYA_IMAGES]=useState([]);
  const [activeTab, setActiveTab] = useState('gurukula');
  const [selectedImage, setSelectedImage] = useState(null);
  const [sortOrder, setSortOrder] = useState('newest');
 
useEffect(()=>{
  const fetchData=async()=>{
    try {
      const res=await axios.get('/gallery/gurukulam/')
      const result=await axios.get('/gallery/adrishya/')
      setgurukulaImages(res.data)
      setADRISHYA_IMAGES(result.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()

},[])

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

const[heroImageURL,setBg]=useState([]);
 useEffect(() => {
    const fetchBg = async () => {
      try {
        const res = await axios.get('gallery_bg/');
        if (res.data.length > 0) {
          setBg(res.data[0].bg); // set image URL from API
        }
        else{
          setBg(heroimg)
        }
      } catch (error) {
        setBg(heroimg); // fallback on error too
      }
    };

    fetchBg();
  }, []);


  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImageURL})` }}
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
              renderedGurukulaImages.map((i, index) => (
                <button
                  key={`g-${index}`}
                  type="button"
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                  onClick={() => openImage(i.images)}
                >
                  <img
                    src={i.images}
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
              adrishyaVisible.map((i, idx) => (
                <button
                  key={`a-${idx}`}
                  type="button"
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                  onClick={() => openImage(i.image)}
                >
                  <img
                    src={i.image}
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
