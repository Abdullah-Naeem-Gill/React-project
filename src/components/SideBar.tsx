// src/Sidebar.tsx
import { useNavigate, Outlet } from 'react-router-dom'; // Import Outlet
import { FaBell, FaSearch } from 'react-icons/fa'; // Import icons
import groupImage from '../assets/Group.png'; // Import the Group.png image for the dashboard
import group2Image from '../assets/Group2.png'; // Import Group2.png for services
import group3Image from '../assets/Group3.png'; // Import Group3.png for staff
import logo from '../assets/logo.png'; // Import logo.png for the heading
import userImage from '../assets/user.png'; // Import a user image for the logged-in user

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDashboardClick = () => {
    navigate("/dashboard"); // Navigate to dashboard
  };

  const handleServicesClick = () => {
    navigate("/dashboard/services"); // Navigate to services
  };

  const handleStaffClick = () => {
    navigate("/dashboard/staff"); // Navigate to staff
  };

  const handleHomeClick = () => {
    navigate("/dashboard"); // Navigate to dashboard when "Home" is clicked
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-52 bg-white text-black flex flex-col shadow-lg">
        <div className="flex items-center justify-center h-40 border-b shadow-lg mt-10 border-gray-700">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </div>
        <nav className="flex-1 mt-5">
          <ul>
            <li
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
              onClick={handleDashboardClick} // Navigate to dashboard
            >
              <img src={groupImage} alt="Dashboard" className="w-6 h-6 mr-2" />
              <span>Dashboard</span>
            </li>
            <li
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
              onClick={handleServicesClick} // Navigate to services
            >
              <img src={group2Image} alt="Services" className="w-6 h-6 mr-2" />
              <span>Services</span>
            </li>
            <li
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
              onClick={handleStaffClick} // Navigate to staff
            >
              <img src={group3Image} alt="Staff" className="w-6 h-6 mr-2" />
              <span>Staff</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right Navbar */}
      <div className="flex-1 bg-gray-100">
        <div className="flex items-center justify-between bg-white text-black p-4 shadow-md">
          <h1
            className="text-xl font-bold text-blue-500 cursor-pointer" 
            onClick={handleHomeClick} // Add click handler for Home
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

        {/* Main content area for Dashboard */}
        <div className="p-4">
          <Outlet /> {/* Render the nested route's component here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
