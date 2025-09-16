import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../service/api";
import Logo from '../../assets/logo/logo.png';
export default function Navbar() {
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("/api/me/");
        setEmail(res.data.email);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setEmail(null);
        // Optional: auto logout if needed
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="w-full h-20 bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo / Title */}
      <div className="flex items-center gap-3">
         <img
                src={Logo}
                alt="Vande Mataram Gurukulam Logo"
                className="h-10 w-auto sm:h-12 object-contain"
              />
        <div className="text-gray-700 font-extrabold text-2xl tracking-tight">
          Vande Mataram <span className="text-gray-700">Gurukulam</span>
        </div>
        
      </div>

      {/* User Info and Logout */}
      <div className="flex items-center gap-4">
        {email && (
          <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              {email.charAt(0).toUpperCase()}
            </div>
            <span className="hidden sm:inline">{email}</span>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition shadow-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
