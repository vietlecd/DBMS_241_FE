import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import RegisterModal from "../Auth/RegisterModal";
import LoginModal from "../Auth/LoginModal";
import TopBanner from "./TopBanner";
import FullHeader from "./FullHeader";

const Header = ({ onSearch }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    // Fetch user role from localStorage on component mount
    const storedRole = localStorage.getItem("role");
    setUserRole(storedRole || null);
  }, []);

  const handleUserAction = () => {
    if (userRole) {
      navigate("/profile");
    } else {
      toggleLoginModal();
    }
  };

  const showTopBanner = location.pathname === "/"; // Display banner only on homepage

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
        onUserAction={handleUserAction}
      />

      {/* Login Modal */}
      {isLoginOpen && (
        <LoginModal
          onClose={toggleLoginModal}
          onSwitchToRegister={() => {
            toggleLoginModal();
            toggleRegisterModal();
          }}
        />
      )}

      {/* Register Modal */}
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
  onSearch: PropTypes.func, // Optional function for handling search
};

export default Header;
