import PropTypes from "prop-types";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { useState } from "react";
import RegisterModal from "../../RegisterModal";
import LoginModal from "../../LoginModal";

function Header2() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);


    const openLoginModal = () => setIsLoginOpen(true);
    const closeLoginModal = () => setIsLoginOpen(false);
    const openRegisterModal = () => setIsRegisterOpen(true);
    const closeRegisterModal = () => setIsRegisterOpen(false);

    const openSearch = () => setShowSearch(!showSearch);

    const onSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    console.log(searchTerm);

    return (
        <div>
            {/* Header Section */}
            <div className="p-4 flex items-center justify-between transition-colors shadow-md fixed left-0 w-full z-[9999]">
                <div className="flex gap-10 items-center">
                    {/* Logo */}
                    < div className="flex items-center" >
                        <img
                            id="logo"
                            src="/a_1-removebg-preview.png"
                            alt="Book Shop Logo"
                            className="h-12 mr-2 bg-transparent"
                        />
                        <h6 className="font-bold text-red-500 text-lg">Book Shop</h6>
                    </div >

                    {/* Navigation Menu */}
                    < nav className="flex gap-x-6 items-center" >
                        <a href="/" className="transition-colors duration-200 text-red-500 hover:text-red-700">Home</a>
                        <a href="/" className="transition-colors duration-200 text-red-500 hover:text-red-700">Shop</a>
                        <a href="/" className="transition-colors duration-200 text-red-500 hover:text-red-700">Return & Replacement</a>
                        <a href="/" className="transition-colors duration-200 text-red-500 hover:text-red-700">Contact Us</a>
                    </nav >
                </div>
                {/* Icons Section */}
                <div className="flex items-center space-x-5 mr-24">
                    <div className="relative">
                        <FaSearch size={24} className="text-red-500 cursor-pointer" onClick={openSearch} />
                        {showSearch && (
                            <input type="text"
                                value={searchTerm}
                                onChange={onSearchChange}
                                onKeyDown={handleKeydown}
                                placeholder="Search here..."
                                className={`absolute top-0 right-8 transition-all duration-500 ease-in-out ${showSearch ? "opacity-100 scale-100" : "opacity-0 scale-0"} border-2 border-red-500 flex w-52 h-8 rounded-lg p-2 bg-transparent text-white`}
                            />
                        )}
                    </div>
                    <div className="cursor-pointer bg-package border border-[#FC0] rounded-2xl px-2.5 py-[5.25px] bg-[rgba(255,204,0,0.16)] min-w-[92px] flex items-center">
                        <div className="w-4 h-4">
                            <img src="https://waka.vn/svgs/icon-vip.svg"
                                alt="icon-vip"
                                className="cursor-pointer">
                            </img>
                        </div>
                        <p className="text-[13px] text-[#fc0] pl-[3px] whitespace-nowrap ">
                            Gói cước
                        </p>
                    </div>
                    
                    <FaShoppingBag size={24} className="text-red-500 cursor-pointer" />
                    <FaUser size={24} className="text-red-500 cursor-pointer" onClick={openLoginModal} />
                </div>
                
            </div>

            {/* Login Modal */}
            {isLoginOpen && (
                <LoginModal
                    onClose={closeLoginModal}
                    onSwitchToRegister={() => {
                        closeLoginModal();
                        openRegisterModal();
                    }}
                />
            )}

            {/* Register Modal */}
            {isRegisterOpen && (
                <RegisterModal
                    onClose={closeRegisterModal}
                    onSwitchToLogin={() => {
                        closeRegisterModal();
                        openLoginModal();
                    }}
                />
            )}
        </div >
    );
}



export default Header2;

