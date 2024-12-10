import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FullHeader = ({ onLoginClick, onSearch, hasTopBanner }) => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const toggleSearch = () => setShowSearch((prev) => !prev);

    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const handleSearchSubmit = (e) => {
        if (e.key === "Enter") {
            onSearch(searchTerm);
        }
    };
    const handlePaymentClick = () => {
        navigate("/payment"); 
    };

    const handleClick = () => {
        navigate("/payment");
    }

    return (
        <div
            className={`p-2 flex items-center justify-between transition-all shadow-md fixed left-0 w-full z-[9999] bg-black text-white`}
            style={{
                top: hasTopBanner ? "35px" : "0",
            }}
        >
            {/* Logo Section */}
            <div className="flex gap-10 items-center">
                <div className="flex items-center">
                    <img
                        id="logo"
                        src="/a_1-removebg-preview.png"
                        alt="Book Shop Logo"
                        className="h-12 mr-2 bg-transparent"
                    />
                    <h6 className="font-bold text-red-500 text-lg">Book Shop</h6>
                </div>

                {/* Navigation Menu */}
                <nav className="flex gap-x-6 items-center">
                    {["Home", "Shop", "Return & Replacement", "Contact Us"].map((item, index) => (
                        <a
                            key={index}
                            href="/"
                            className="transition-colors duration-200 text-red-500 hover:text-red-700"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-5">
                {/* Search Icon */}
                <div className="relative">
                    <FaSearch size={24} className="text-red-500 cursor-pointer" onClick={toggleSearch} />
                    {showSearch && (
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onKeyDown={handleSearchSubmit}
                            placeholder="Search here..."
                            className="absolute top-0 right-8 transition-all duration-500 ease-in-out border-2 border-red-500 flex w-52 h-8 rounded-lg p-2 bg-transparent text-white"
                        />
                    )}
                </div>

                {/* Other Icons */}
                <div className="cursor-pointer bg-package border border-[#FC0] rounded-2xl px-2.5 py-[5.25px] bg-[rgba(255,204,0,0.16)] min-w-[92px] flex items-center"
                    onClick={handlePaymentClick}>
                    <img
                        src="https://waka.vn/svgs/icon-vip.svg"
                        alt="icon-vip"
                        className="w-4 h-4"
                    />
                    <p className="text-[13px] text-[#fc0] pl-[3px] whitespace-nowrap" onClick={handleClick}>Gói cước</p>

                </div>
                <FaShoppingBag size={24} className="text-red-500 cursor-pointer" />
                <FaUser size={24} className="text-red-500 cursor-pointer" onClick={onLoginClick} />
            </div>
        </div>
    );
};

FullHeader.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    onSearch: PropTypes.func,
};

export default FullHeader;
