import { useNavigate, Outlet } from 'react-router-dom';
import { FaBell, FaSearch } from 'react-icons/fa';
import groupImage from '../assets/Group.png';
import group2Image from '../assets/Group2.png';
import group3Image from '../assets/Group3.png';
import logo from '../assets/logo.png';
import userImage from '../assets/user.png';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleServicesClick = () => {
    navigate("/dashboard/services");
  };

  const handleStaffClick = () => {
    navigate("/dashboard/staff");
  };

  const handleBookingClick = () => {
    navigate("/dashboard/bookings"); // Navigate to bookings
  };

  const handleHomeClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen">
      <div className="w-52 bg-white text-black flex flex-col shadow-lg fixed top-0 left-0 h-screen">
        <div className="flex items-center justify-center h-40 border-b shadow-lg mt-10 border-gray-700">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </div>
        <nav className="flex-1 mt-5">
          <ul>
            <li
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
              onClick={handleDashboardClick}
            >
              <img src={groupImage} alt="Dashboard" className="w-6 h-6 mr-2" />
              <span>Dashboard</span>
            </li>
            <li
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
              onClick={handleServicesClick}
            >
              <img src={group2Image} alt="Services" className="w-6 h-6 mr-2" />
              <span>Services</span>
            </li>
            <li
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
              onClick={handleStaffClick}
            >
              <img src={group3Image} alt="Staff" className="w-6 h-6 mr-2" />
              <span>Staff</span>
            </li>
            <li
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
              onClick={handleBookingClick} // New booking navigation
            >
              <img src={group2Image} alt="Bookings" className="w-6 h-6 mr-2" />
              <span>Bookings</span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 bg-gray-100 ml-52">
        <div className="flex items-center justify-between bg-white text-black p-4 shadow-md">
          <h1
            className="text-xl font-bold text-blue-500 cursor-pointer"
            onClick={handleHomeClick}
          >
            Home
          </h1>
          <div className="flex items-center space-x-4">
            <FaSearch />
            <FaBell />
            <img
              src={userImage}
              alt="User"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </div>

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
