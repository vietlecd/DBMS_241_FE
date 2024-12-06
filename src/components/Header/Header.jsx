import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import RegisterModal from "../Auth/RegisterModal";
import LoginModal from "../Auth/LoginModal";
import TopBanner from "./TopBanner";
import FullHeader from "./FullHeader";

const Header = ({ onSearch }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const location = useLocation(); // Get current route
  const showTopBanner = location.pathname === "/"; 

  const toggleLoginModal = () => setIsLoginOpen((prev) => !prev);
  const toggleRegisterModal = () => setIsRegisterOpen((prev) => !prev);

  return (
    <div>
      {/* Top Banner */}
      {showTopBanner && <TopBanner />}

      {/* Full Header */}
      <FullHeader
        onLoginClick={toggleLoginModal}
        onSearch={onSearch}
        hasTopBanner={showTopBanner} 
      />

      {/* Modals */}
      {isLoginOpen && (
        <LoginModal
          onClose={toggleLoginModal}
          onSwitchToRegister={() => {
            toggleLoginModal();
            toggleRegisterModal();
          }}
        />
      )}
      {isRegisterOpen && (
        <RegisterModal
          onClose={toggleRegisterModal}
          onSwitchToLogin={() => {
            toggleRegisterModal();
            toggleLoginModal();
          }}
        />
      )}
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
