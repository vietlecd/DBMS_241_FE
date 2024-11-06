import PropTypes from "prop-types";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import "./Header.css"; // Import a custom CSS file for additional styling

const Header = () => {
  return (
    <div className="p-4 flex items-center justify-between fixed top-0 left-0 w-full z-[9999] bg-white shadow-md">
      <div className="text-pink-500 text-lg-10 font-poppins font-semibold">
        Manga Shop
      </div>
      <nav className="flex items-center space-x-5 font-poppins text-pink-500 mx-auto">
        <a href="#" className="cute-link">
          LightNovel
        </a>
        <a href="#" className="cute-link">
          Categories
        </a>
        <a href="#" className="cute-link">
          Manhwa
        </a>
        <a href="#" className="cute-link">
          Collections
        </a>
        <a href="#" className="cute-link">
          Complete Sets
        </a>
      </nav>

      {/* Icons Section */}
      <div className="flex items-center space-x-5">
        <FaSearch size={24} className="text-pink-500 cursor-pointer" />
        <FaShoppingBag size={24} className="text-pink-500 cursor-pointer" />
        <FaUser size={24} className="text-pink-500 cursor-pointer" />
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
