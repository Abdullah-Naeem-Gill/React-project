// src/components/Services.tsx
import { useState } from 'react';

const Services = () => {
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
        <h2 className="text-2xl font-bold">Services Information</h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2 md:mt-0"
          onClick={toggleForm}
        >
          Service
        </button>
      </div>
      <p>Here is the services information...</p>

      {/* Search Bar Section */}
      <div className="mt-4 bg-pink-500 h-36 flex flex-col justify-center p-4">
        <label htmlFor="search" className="text-sm text-white font-bold mb-2">
          What are you looking for?
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search for a service..."
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>

      {/* Show Form when button is clicked */}
      {showForm && (
        <>
          {/* Background overlay for form */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="absolute top-0 left-0 right-0 mt-4 p-4 border border-gray-300 rounded bg-white z-20">
            <h3 className="text-lg mb-2 text-[#F05F97] font-extrabold">Add New Services</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Form Fields */}
              <div className="mb-4">
                <label htmlFor="serviceName" className="block text-sm font-medium mb-1">
                  Service Name
                </label>
                <input
                  type="text"
                  id="serviceName"
                  placeholder="Enter service name"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="requiredTherapists" className="block text-sm font-medium mb-1">
                  Required Therapists:
                </label>
                <input
                  type="number"
                  id="requiredTherapists"
                  placeholder="Enter number of therapists required"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="amenities" className="block text-sm font-medium mb-1">
                  Amenities
                </label>
                <input
                  type="text"
                  id="amenities"
                  placeholder="List amenities"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium mb-1">
                  Service Price
                </label>
                <input
                  type="text"
                  id="price"
                  placeholder="Enter service price"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full md:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {/* Table Section */}
      <div className="mt-4 overflow-auto"> {/* Adjusted margin to accommodate the form */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Service Name</th>
              <th className="border px-4 py-2">Amenities</th>
              <th className="border px-4 py-2">Service Price</th>
              <th className="border px-4 py-2">Required Therapists</th>
              <th className="border px-4 py-2">Options</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Rows */}
            <tr>
              <td className="border px-4 py-2">Massage Therapy</td>
              <td className="border px-4 py-2">Hot Stones, Aromatherapy</td>
              <td className="border px-4 py-2">$80</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                  Book Now
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Facial Treatment</td>
              <td className="border px-4 py-2">Deep Clean, Hydration</td>
              <td className="border px-4 py-2">$60</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                  Book Now
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Body Scrub</td>
              <td className="border px-4 py-2">Exfoliation, Moisturizing</td>
              <td className="border px-4 py-2">$75</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                  Book Now
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Reflexology</td>
              <td className="border px-4 py-2">Foot Massage, Relaxation</td>
              <td className="border px-4 py-2">$50</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                  Book Now
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Acupuncture</td>
              <td className="border px-4 py-2">Pain Relief, Stress Reduction</td>
              <td className="border px-4 py-2">$90</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                  Book Now
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Yoga Class</td>
              <td className="border px-4 py-2">Group Session, Meditation</td>
              <td className="border px-4 py-2">$20</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                  Book Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
