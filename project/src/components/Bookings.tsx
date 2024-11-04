// src/components/Bookings.tsx
import { useState } from 'react';

const Bookings = () => {
  // State to manage form visibility
  const [showForm, setShowForm] = useState(false);

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="relative p-4">
      {/* Flex container for header and button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Bookings Information</h2>
        <button
          className="mt-2 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={toggleForm}
        >
          Add Booking
        </button>
      </div>
      <p>Here is the bookings information...</p>

      {/* Search Bar Section */}
      <div className="mt-4 bg-pink-500 h-36 flex flex-col justify-center p-4">
        <label htmlFor="search" className="text-sm text-white font-bold mb-2">
          What booking are you looking for?
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search for a booking..."
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Show Form when button is clicked */}
      {showForm && (
        <>
          {/* Background overlay for form */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="absolute top-0 left-0 right-0 mt-4 p-4 border border-gray-300 rounded bg-white z-20">
            <h3 className="text-lg mb-2 text-[#F05F97] font-extrabold">Add New Booking</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Side Fields */}
              <div className="mb-4">
                <label htmlFor="clientName" className="block text-sm font-medium mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  id="clientName"
                  placeholder="Enter client name"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Service Booked
                </label>
                <input
                  type="text"
                  id="service"
                  placeholder="Enter booked service"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium mb-1">
                  Date of Booking
                </label>
                <input
                  type="date"
                  id="date"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="therapist" className="block text-sm font-medium mb-1">
                  Assigned Therapist
                </label>
                <input
                  type="text"
                  id="therapist"
                  placeholder="Enter therapist's name"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>

              {/* Right Side Fields */}
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium mb-1">
                  Booking Status
                </label>
                <select
                  id="status"
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {/* Table Section */}
      <div className="mt-4 overflow-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Client Name</th>
              <th className="border px-4 py-2">Service</th>
              <th className="border px-4 py-2">Booking Date</th>
              <th className="border px-4 py-2">Assigned Therapist</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Options</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Rows */}
            <tr>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">Massage Therapy</td>
              <td className="border px-4 py-2">2024-11-04</td>
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2">Confirmed</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Alice Brown</td>
              <td className="border px-4 py-2">Facial Treatment</td>
              <td className="border px-4 py-2">2024-11-05</td>
              <td className="border px-4 py-2">Tom Johnson</td>
              <td className="border px-4 py-2">Pending</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
