import PropTypes from "prop-types";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";

const Header = ({ onSearch }) => {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-gray-800 text-white text-center p-2 fixed top-0 left-0 w-full z-50">
        <p className="inline m-0">GET DEALS ON BOOKS! FLAT 50% OFF ON ALL BOOKS</p>
        <a href="/" className="font-bold ml-2 underline cursor-pointer text-red-500">
          Shop Now
        </a>
      </div>

      {/* Header Section */}
      <div className="p-4 flex items-center justify-between bg-gray-900 shadow-md fixed top-[40px] left-0 w-full z-[9999]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            id="logo"
            src="/a_1-removebg-preview.png"
            alt="Manga Store Logo"
            className="h-12 mr-2 bg-transparent"
          />
          <h6 className="font-bold text-red-500 text-lg">Book Shop</h6>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-5 font-semibold mx-auto text-white">
          <a href="/" className="transition-colors duration-200 hover:text-red-500">Home</a>
          <a href="/categories" className="transition-colors duration-200 hover:text-red-500">Shop</a>
          <a href="/p/about-us" className="transition-colors duration-200 hover:text-red-500">About Us</a>
          <a href="/p/return-and-replacement" className="transition-colors duration-200 hover:text-red-500">Return & Replacement</a>
          <a href="/p/contact-us" className="transition-colors duration-200 hover:text-red-500">Contact Us</a>
          <a href="/p/terms-and-conditions" className="transition-colors duration-200 hover:text-red-500">Terms & Conditions</a>
          <a href="/p/privacy-policy" className="transition-colors duration-200 hover:text-red-500">Privacy Policy</a>
          <a href="/p/cancellationrefund-policy" className="transition-colors duration-200 hover:text-red-500">Cancellation/Refund Policy</a>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-5">
          <FaSearch size={24} className="text-red-500 cursor-pointer" onClick={onSearch} />
          <FaShoppingBag size={24} className="text-red-500 cursor-pointer" />
          <FaUser size={24} className="text-red-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
