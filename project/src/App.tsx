// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Sidebar from './components/SideBar';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import Services from './components/Services'; // Import Services component
import Staff from './components/Staff'; // Import Staff component
import Booking from './components/Bookings'; // Import Booking component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Sidebar />}>
          <Route index element={<Dashboard />} /> {/* Render Dashboard by default */}
          <Route path="services" element={<Services />} /> {/* Route for Services */}
          <Route path="staff" element={<Staff />} /> {/* Route for Staff */}
          <Route path="bookings" element={<Booking />} /> {/* Route for Bookings */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
