// landingPage.tsx
import background from "../assets/background.png";
import logo from "../assets/logo.png";
import { FiArrowRight } from "react-icons/fi"; // Import an arrow icon from react-icons
// LandingPage.tsx
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="transform -translate-y-10 flex flex-col items-center ">
        <img src={logo} alt="Logo" className="w-60 h-auto mb-11 mt-52" />
        <div>
          <p className="text-white text-4xl font-bold text-center">
            About Wishah Appointment Booking & Schedules
          </p>
        </div>
        <div className="py-10 w-2/3">
          <p className="text-white text-lg text-center">
            Wishah SPA booking is one of the best spa, salon and any kinds of
            Therapist's appointment and schedules booking application with
            integrated CMS website. Using this system admin can Customize
            Service time slot, Daily/Weekly/Monthly Booking & cancellation
            limitation, Employee wise service and service price.
          </p>
          <div className="text-lg justify-center flex py-10">
            <button
              className="flex items-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
              onClick={handleGetStartedClick} // Add click handler
            >
              Get Started
              <FiArrowRight /> {/* Arrow icon with margin-left */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
