import React, { useState } from "react";
import { Outlet } from "react-router-dom"; 
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="bg-black pb-10">
      <Header />
      <div className="content">
        {/* Hiển thị nội dung bên trong, bao gồm HomePage, Login, Register */}
        <Outlet />
      </div>
      {/* Modal Login */}
      {isLogin && (
        <LoginModal
          onClose={() => setIsLogin(false)}
          onSwitchToRegister={() => {
            setIsRegister(true);
            setIsLogin(false);
          }}
        />
      )}
      {/* Modal Register */}
      {isRegister && (
        <RegisterModal
          onClose={() => setIsRegister(false)}
          onSwitchToLogin={() => {
            setIsLogin(true);
            setIsRegister(false);
          }}
        />
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
