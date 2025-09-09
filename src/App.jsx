import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './Components/ScrollToTop' // ⬅️ Add this line

import HomePage from './Pages/HomePages/Home'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'

import OurModel from './Pages/OurModel/OurModel'
import ActivityPage from './Pages/Activities/ActivityHome'
import GalleryPage from './Pages/Gallery/GalleryHome'
import SupportUsPage from './Pages/SupportPage/SupportUs'
import AboutPage from './Pages/About/About'
import ContactPage from './Pages/ContactPage/ContactHome'
import AdrishyaSection from './Pages/Activities/AdrishyaPage'
import NewsPage from './Pages/NewsPage/NewsPage'
import AboutSection from './Pages/HomePages/Home'
import NewsSection from './Pages/HomePages/NewsSection'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ⬅️ Add this line here */}
      <Navbar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/model' element={<OurModel />} />
        <Route path='/activities' element={<ActivityPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/support' element={<SupportUsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/adhrishya' element={<AdrishyaSection />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/a' element={<AboutSection />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsPage />} /> {/* Same component handles detail */}

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
