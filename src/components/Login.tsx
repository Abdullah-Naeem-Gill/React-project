// src/Login.tsx
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import image3 from "../assets/image3.png"; // Adjust the path if necessary
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    // You can add your authentication logic here

    // Navigate to the SideBar page
    navigate('/dashboard');
  };

  return (
    <div className="h-screen flex">
      {/* Left Half with Image */}
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <img src={image3} alt="Description of Image" className="h-full w-full object-cover" />
      </div>
      {/* Right Half for Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-pink-400">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-60 h-auto mb-6" /> {/* Add margin below the logo */}
          <form className="w-96" onSubmit={handleLogin}> {/* Add onSubmit handler */}
            <h1 className="text-2xl font-bold mb-4 text-center">Login</h1> {/* Centered title */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email" // Changed to email type
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email" // Placeholder added
                required // Makes the field required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Email validation regex
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required // Makes the field required
                minLength={6} // Password must be at least 6 characters long
              />
            </div>
            {/* Remember Me Checkbox */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 leading-tight"
                />
                <label htmlFor="remember" className="text-sm text-white">
                  Remember Me
                </label>
              </div>
              <a href="/forgot-password" className="text-white hover:underline text-sm">
                Forgot Password?
              </a>
            </div>
            
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out w-full">
              Login
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
