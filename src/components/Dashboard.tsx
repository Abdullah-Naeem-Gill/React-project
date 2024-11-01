const Dashboard = () => {
  const data = [
    { label: "Total Done", number: 150, progress: 75, color: "text-black" },
    {
      label: "Total Cancel",
      number: 45,
      progress: 30,
      color: "text-[#F9AD4B]",
    },
    {
      label: "Total Approved",
      number: 110,
      progress: 60,
      color: "text-[#8BC152]",
    },
    {
      label: "Processing & Pending",
      number: 30,
      progress: 45,
      color: "text-[#6ED5D0]",
    },
  ];

  const progressData = [
    { progress: 80, color: "text-blue-500" },
    { progress: 60, color: "text-green-500" },
    { progress: 90, color: "text-purple-500" },
    { progress: 40, color: "text-red-500" },
    { progress: 70, color: "text-yellow-500" },
  ];

  const rightSectionData = [
    { title: "Total Income", number: 0.0, color: "text-[#8BC152]" },
    { title: "Total Expenses", number: 0.0, color: "text-[#F05F97]" },
    { title: "Net Profit", number: 0.0, color: "text-[#8BC152]" },
    { title: "Pending Payments", number: 0.0, color: "text-[#F05F97]" },
  ];

  return (
    <div className="p-4">
      {/* Top Navbar */}
      <div className="relative bg-pink-400 h-44 shadow-md p-4">
        <div className="flex h-32 items-center text-white font-bold justify-between">
          <p className="text-lg mb-10">Appointment Booking Dashboard</p>
          <button className="bg-green-400 text-white mb-10 py-2 px-4 rounded hover:bg-blue-600">
            Add New Booking
          </button>
        </div>

        {/* Four Horizontal Divs */}
        <div className="absolute top-0 left-0 mt-24 w-full flex justify-between gap-x-4 p-4 mr-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white w-1/4 h-32 rounded-2xl shadow-md p-4 flex justify-between items-center"
            >
              {/* Text and Number */}
              <div className="flex flex-col">
                <span className={`text-left font-bold ${item.color}`}>
                  {item.label}
                </span>
                <span className="text-xl font-bold text-gray-900 mt-2">
                  {item.number}
                </span>
              </div>
              {/* Circular Progress */}
              <div className="relative w-12 h-12">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <circle
                    className="text-gray-300"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="transparent"
                    r="16"
                    cx="18"
                    cy="18"
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth="3"
                    strokeDasharray="100"
                    strokeDashoffset={100 - item.progress}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="16"
                    cx="18"
                    cy="18"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                  {item.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Two Horizontal Divs Below */}
        <div className="flex justify-between mt-40 gap-x-4">
          {/* Left Div - 60% Width */}
          <div className="bg-white w-3/5 h-48 rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800">
              Today’s Services Statistics
            </h2>
            <p className="text-gray-600 mt-1">
              Show all services based on user branch permission.
            </p>

            {/* Circular Progress at the bottom */}
            <div className="flex justify-between mt-4">
              {progressData.map((item, index) => (
                <div key={index} className="relative w-10 h-10">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <circle
                      className="text-gray-300"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                    <circle
                      className={item.color}
                      strokeWidth="3"
                      strokeDasharray="100"
                      strokeDashoffset={100 - item.progress}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                    {item.progress}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Div - 40% Width */}
          <div className="bg-white w-2/5 h-48 rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-lg font-bold text-gray-800">
              Total’s Income & other statistics
            </h2>
            <div className="flex justify-between mt-4">
              {/* Left Side Subheadings */}
              <div className="flex flex-col w-1/2">
                {rightSectionData.slice(0, 2).map((item, index) => (
                  <div key={index} className="mb-2">
                    <h3 className={`text-sm font-semibold ${item.color}`}>
                      {item.title}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      {item.number}
                    </p>
                  </div>
                ))}
              </div>
              {/* Right Side Subheadings */}
              <div className="flex flex-col w-1/2">
                {rightSectionData.slice(2).map((item, index) => (
                  <div key={index} className="mb-2">
                    <h3 className={`text-sm font-semibold ${item.color}`}>
                      {item.title}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      {item.number}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* New Two Horizontal Divs Below */}
        <div className="flex justify-between mt-4 gap-x-4">
          <div className="bg-white w-3/5 h-auto rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800">Booking Info</h2>

            {/* Table Section */}
            <table className="min-w-full mt-2 border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border-b border-gray-300 px-4 py-2">Names</th>
                  <th className="border-b border-gray-300 px-4 py-2">
                    Services
                  </th>
                  <th className="border-b border-gray-300 px-4 py-2">
                    Timeslots
                  </th>
                  <th className="border-b border-gray-300 px-4 py-2">Status</th>{" "}
                  {/* New Status Column */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-300 px-4 py-2">
                    John Doe
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    Consultation
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    10:00 AM
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    <button className="border-2 border-green-400 text-green-400 py-1 px-2 rounded-lg hover:bg-green-600">
                      Active
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-300 px-4 py-2">
                    Jane Smith
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    Follow-up
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    11:00 AM
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    <button className="border-2 border-green-400 text-green-400 py-1 px-2 rounded-lg hover:bg-green-600">
                      Active
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* New Right Div - 40% Width */}
          <div className="bg-white w-2/5 h-auto rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-lg font-bold text-gray-800">
              Pending Services Statistics
            </h2>
            {/* Table Section */}
            <table className="min-w-full mt-2 border border-gray-300">
              <tbody>
                <tr>
                  <td className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className="font-bold">Hair Cut</span>
                      <p className="text-gray-600">Our top services</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-gray-900 font-bold">300</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className="font-bold">Facial</span>
                      <p className="text-gray-600">Our top services</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-gray-900 font-bold">500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
