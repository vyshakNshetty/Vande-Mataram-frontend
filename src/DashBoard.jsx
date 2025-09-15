import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../src/Components/Dashboard/Navbar';
import Sidebar from '../src/Components/Dashboard/SideBar';
const DashboardLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) return <Outlet />;

  return (
    <div className="flex flex-col h-screen">
      <Navbar />    
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet /> 
        </main>
      </div>
    </div>
  );

};

export default DashboardLayout;
