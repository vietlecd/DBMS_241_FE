import { FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const RegisterModal = ({ onClose, onSwitchToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullname, setFullName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const payload = {
      fullname,
      phone_number: phoneNumber,
      password,
      username,
      retype_password: retypePassword,
      role_id: 2, 
    };

    try {
      console.log("Payload:", payload);
      const response = await fetch(
        "http://localhost:8080/api/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
    
      console.log("Response status:", response.status);
      const responseData = await response.text();
      console.log("Response data:", responseData);
    
      if (!response.ok) {
        toast.error(
          responseData || "An error occurred during registration.",
          { position: "top-center", autoClose: 2000 }
        );
        return;
      }
    
      toast.success("Registration successful! Redirecting to login...", {
        position: "top-center",
        autoClose: 1000,
      });
      setTimeout(() => {
        onSwitchToLogin();
      }, 1000);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
    }    
  };

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-lg max-w-md w-[400px] h-[550px] relative mt-20 z-[1000]">
        <button
          onClick={onClose}
          className="absolute top-5 right-1 text-gray-200 hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex flex-col items-center p-5 top-10 bottom-5 scale-60">

          <form className="w-full px-6 py-6" onSubmit={handleRegister}>

            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-600">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-600">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-600">
                Retype Password
              </label>
              <input
                type="password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                placeholder="Retype your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-red-500 hover:underline"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
