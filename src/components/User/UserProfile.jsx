import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import UserBooks from "./UserBook";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import UserTransactions from "./Transactions/TransactionHistory";
import {get_user_info, update_user_info, get_user_points} from "../../services/UserService";
import Sidebar from "./Sidebar/Sidebar";
import UserProfileContent from "./UserProfile/UserProfileContent";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    phone_number: "",
    username: "",
  });
  const [activeContent, setActiveContent] = useState("profile"); // Track active content
  const [isAuthorFormVisible, setIsAuthorFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savedFullname, setSavedFullname] = useState("");
  const [isSupportVisible, setIsSupportVisible] = useState(false);


  const fetchUserData = async () => {
    try {
      const userData = await get_user_info();
      setUserData(userData);
      setSavedFullname(userData.fullname);
      console.log("User data:", userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("An error occurred while fetching user data.");
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await update_user_info(userData);
      alert("Cập nhật thông tin thành công!");
      setLoading(false);
      setSavedFullname(userData.fullname);
      fetchUserData();
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("An error occurred while updating user data.");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClick = () => {
    window.location.href = "http://localhost:5173/payment";
  };

  const handleAuthorSubmit = () => {
    window.location.href = "http://localhost:5173/author";
  };

  

  const handleCancel = () => {
    setUserData({
      fullname: "",
      phone_number: "",
      username: "",
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (

    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-6 py-10 pt-40">
        <div className="flex space-x-0">
          {/* Sidebar */}
          <Sidebar setActiveContent={setActiveContent} activeContent={activeContent} setIsSupportVisible={setIsSupportVisible} handleClick={handleClick} handleAuthorSubmit={handleAuthorSubmit} userData={userData} savedFullname={savedFullname} />

          {/* Main Content */}
          <UserProfileContent activeContent={activeContent} userData={userData} handleChange={handleChange} handleUpdate={handleUpdate} handleCancel={handleCancel} loading={loading} />
        </div>
      </div>
      {/* Customer Support Overlay */}
      {isSupportVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-[400px] bg-gray-800 text-white p-8 rounded-lg">
            <CustomerSupport />
            <button
              onClick={() => setIsSupportVisible(false)} // Close overlay
              className="absolute top-3 right-3 text-white bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserProfile;
