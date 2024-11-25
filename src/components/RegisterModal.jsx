import { FaTimes } from "react-icons/fa";

const RegisterModal = ({ onClose }) => {
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

          
          <p className="text-gray-500">Register your account</p>

          <form className="w-full px-6 py-2">
            <div className="mb-2">
                <label htmlFor="text" className="block text-sm font-semibold text-gray-600">
                    First Name
                </label>
                <input 
                    type="text"
                    className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your first name"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="text" className="block text-sm font-semibold text-gray-600">
                    Last Name
                </label>
                <input 
                    type="text"
                    className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your last name"
                />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                Username
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-2">
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
