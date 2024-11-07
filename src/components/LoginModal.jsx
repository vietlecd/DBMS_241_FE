import { FaTimes } from "react-icons/fa";

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative mt-20 z-[1000]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-0 text-gray-200  hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex flex-col items-center p-6">
          {/* Background image */}
          <div
            className="w-full h-40 bg-cover bg-center rounded-t-lg"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NzR8MHwxfGFsbHwxfHx8fHx8fHwxNjA3ODQyNjUy&ixlib=rb-1.2.1&q=80&w=1080')",
            }}
          ></div>

          <h2 className="mt-4 text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500">Log in to access your account</p>

          <form className="w-full px-6 py-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                Username
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
