import { Outlet } from 'react-router-dom';
import Navbar from '../src/Components/NavBar'
import Footer from '../src/Components/Footer';

const WebsiteLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default WebsiteLayout;
