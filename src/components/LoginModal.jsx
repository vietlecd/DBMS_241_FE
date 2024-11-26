import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const LoginModal = ({ onClose, onSwitchToRegister }) => {
  // State để quản lý giá trị của các input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://devjava-latest.onrender.com/api/users/login",
        //"http://localhost:8080/api/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        alert(`Error: ${errorData || "Login failed"}`);
        return;
      }

      alert("Login successful!");
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while logging in. Please try again later.");
    }
  };

  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-[380px] h-[500px] relative mt-20 z-[1000]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-1 text-gray-200 hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex flex-col items-center p-3 scale-90 h-[500px]">
          {/* Background image */}
          <div
            className="w-full h-40 bg-cover bg-center rounded-t-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NzR8MHwxfGFsbHwxfHx8fHx8fHwxNjA3ODQyNjUy&ixlib=rb-1.2.1&q=80&w=1080')",
            }}
          ></div>

          <p className="text-gray-600">Login to your account</p>

          <form className="w-full px-4 py-2" onSubmit={handleLogin}>
            <div className="mb-2">
              <label
                htmlFor="username"
                className="text-1xl block font-semibold text-gray-600"
              >
                Username
              </label>
              <input
                maxLength="150"
                autoComplete="on"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 px-4 py-4 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-1xl font-semibold text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 px-4 py-4 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
            >
              Login
            </button>
          </form>

          

          <p className="mt-4 text-sm text-gray-500">
            Don't have an account?{" "}
            <button
              onClick={onSwitchToRegister}
              className="text-red-500 hover:underline"
            >
              Register here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
