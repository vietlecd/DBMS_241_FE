import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
import UserBooks from "./UserBook";
import CustomerSupport from "./CustomerSupport";
import UserTransactions from "./TransactionHistory";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    phone_number: "",
    username: "",
  });
  const [activeContent, setActiveContent] = useState("profile"); // Track active content
  const [loading, setLoading] = useState(false);
  const [savedFullname, setSavedFullname] = useState("");
  const [isSupportVisible, setIsSupportVisible] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.text();
        alert(`Error: ${errorData || "Failed to fetch user data"}`);
        return;
      }

      const userData = await response.json();
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
      const response = await fetch("http://localhost:8080/api/users/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        alert(`Error: ${errorData || "Failed to update user data"}`);
        setLoading(false);
        return;
      }

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
          <div className="min-w-[273px] border-r border-gray-300-overlay sticky top-[50px] left-0 h-[80vh] p-6 pl-0">
            <div className="border-b border-gray-700 pb-4 mb-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{savedFullname}</h3>
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={
                      userData.avatar ||
                      "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.avatar/0/0/35/18380/9410632.jpg?v=10&w=200&h=200"
                    }
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="ml-6 w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                </svg>
              </div>
              <div className="mt-4 flex space-x-4">
                <button className="px-4 py-2 bg-green-400 hover:bg-green-600 text-white font-semibold rounded-lg">
                  Nạp Point
                </button>
                <button className="px-4 py-2 bg-green-400 hover:bg-green-600 text-white font-semibold rounded-lg">
                  Trở Thành Tác Giả
                </button>
              </div>
            </div>
            <ul className="space-y-4">
              <li
                className={`p-2 rounded-xl cursor-pointer ${activeContent === "profile"
                    ? "bg-gray-700 text-green-400"
                    : "hover:bg-gray-700"
                  }`}
                onClick={() => setActiveContent("profile")}
              >
                <div className="flex items-center">
                  <img
                    src={
                      activeContent === "profile"
                        ? "https://waka.vn/svgs/icon-user-active.svg"
                        : "https://waka.vn/svgs/icon-user.svg"
                    }
                    alt="icon-user"
                  />
                  <span className="ml-3">Quản lý tài khoản</span>
                </div>
              </li>
              <li
                className={`p-2 rounded-xl cursor-pointer ${activeContent === "books"
                    ? "bg-gray-700 text-green-400"
                    : "hover:bg-gray-700"
                  }`}
                onClick={() => setActiveContent("books")}
              >
                <div className="flex items-center">
                  <img
                    src={
                      activeContent === "books"
                        ? "https://waka.vn/svgs/icon-account-white-active.svg"
                        : "https://waka.vn/svgs/icon-account-white.svg"
                    }
                    alt="icon-books"
                  />
                  <span className="ml-3">Tủ sách cá nhân</span>
                </div>
              </li>
              <li
                className={`p-2 rounded-xl cursor-pointer ${activeContent === "transactions"
                    ? "bg-gray-700 text-green-400"
                    : "hover:bg-gray-700"
                  }`}
                onClick={() => setActiveContent("transactions")}
              >
                <div className="flex items-center">
                  <img
                    src={
                      activeContent === "transactions"
                        ? "https://waka.vn/svgs/icon-history-white-active.svg"
                        : "https://waka.vn/svgs/icon-history-white.svg"
                    }
                    alt="icon-transactions"
                  />
                  <span className="ml-3">Lịch sử giao dịch</span>
                </div>
              </li>
              <li
                className="p-2 rounded-xl cursor-pointer hover:bg-gray-700"
                onClick={() => setIsSupportVisible(true)}
              >
                <div className="flex items-center">
                  <img
                    src="https://waka.vn/svgs/icon-phone-white.svg"
                    alt="icon-phone-white"
                  />
                  <span className="ml-3">Hỗ trợ khách hàng</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {activeContent === "profile" && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Quản lý thông tin</h1>
                <div className="p-6 rounded-lg space-y-4 max-w-md">
                  <div className="px-0 py-1 rounded-lg">
                    <label className="text-gray-400 text-sm">
                      Tên đăng nhập
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={userData.username}
                      onChange={handleChange}
                      className="bg-gray-700 text-white w-full rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="px-0 py-1 rounded-lg">
                    <label className="text-gray-400 text-sm">Họ và tên</label>
                    <input
                      type="text"
                      name="fullname"
                      value={userData.fullname}
                      onChange={handleChange}
                      className="bg-gray-700 text-white w-full rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="px-0 py-1 rounded-lg">
                    <label className="text-gray-400 text-sm">
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      value={userData.phone_number}
                      onChange={handleChange}
                      className="bg-gray-700 text-white w-full rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-start space-x-2 text-sm">
                    <button
                      onClick={handleUpdate}
                      className={`px-3 py-1 bg-green-400 hover:bg-green-600 text-white font-semibold rounded-lg ${loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      disabled={loading}
                    >
                      {loading ? "Đang cập nhật..." : "Cập nhật thông tin"}
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-3 py-1 top-6 bg-gray-600 font-semibold rounded-lg"
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeContent === "books" && <UserBooks />}
            {activeContent === "transactions" && <UserTransactions />}
          </div>
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
