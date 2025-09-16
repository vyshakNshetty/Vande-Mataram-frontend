import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './Components/ScrollToTop';

// Website Pages
import HomePage from './Pages/HomePages/Home';
import OurModel from './Pages/OurModel/OurModel';
import ActivityPage from './Pages/Activities/ActivityHome';
import GalleryPage from './Pages/Gallery/GalleryHome';
import SupportUsPage from './Pages/SupportPage/SupportUs';
import AboutPage from './Pages/About/About';
import ContactPage from './Pages/ContactPage/ContactHome';
import AdrishyaSection from './Pages/Activities/AdrishyaPage';
import NewsPage from './Pages/NewsPage/NewsPage';
import AboutSection from './Pages/HomePages/Home';

// Layouts
import WebsiteLayout from './WebsiteLayout';
import DashboardLayout from './DashBoard';

// DashBoard 
import { Navigate } from "react-router-dom";
import Home from './Pages/Dashboard/Home'
import Backgrounds from './Pages/Dashboard/Backgrounds'
import Dashboard_news from './Pages/Dashboard/News'
import ActivitiesDashboard from './Pages/Dashboard/Activities';
import GalleryToggle from './Pages/Dashboard/Gallery';
import Team from './Pages/Dashboard/Team';
import SteeringTeam from './Pages/Dashboard/BoardTeam';
// Auth + Utils
import PrivateRouters from './service/PrivateRouters';
import Login from './Components/Dashboard/Login';
import NotFound from './Components/Dashboard/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Website Public Layout */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/model" element={<OurModel />} />
          <Route path="/activities" element={<ActivityPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/support" element={<SupportUsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/adhrishya" element={<AdrishyaSection />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/a" element={<AboutSection />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsPage />} />
        </Route>

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={<PrivateRouters><DashboardLayout /></PrivateRouters>}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="bggrounds" element={<Backgrounds />} />
          <Route path="news" element={<Dashboard_news />} />
          <Route path="activities" element={<ActivitiesDashboard />} />
          <Route path="gallery" element={<GalleryToggle />} />
          <Route path="team" element={<Team />} />
          <Route path="board_team" element={<SteeringTeam />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
