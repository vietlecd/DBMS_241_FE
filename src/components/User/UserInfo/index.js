import React, { useState } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullName: "Việt Lê",
    username: "vietlh0207",
    userId: "9410632",
    birthDate: "01/01/1900",
    gender: "Khác",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected File: ", file);
  };

  const handleUpdate = () => {
    console.log("Updated User Data: ", userData);
    alert("Cập nhật thành công!");
  };

  const handleCancel = () => {
    console.log("Hủy cập nhật");
  };

  return (
    <div className="w-full flex relative h-full container">
      {/* Sidebar */}
      <div className="min-w-[273px] border-r border-white-overlay sticky top-[50px] left-0 h-[80vh] p-6 pl-0">
        <div className="border-b border-b-white-overlay py-4">
          {/* User Info */}
          <div className="flex justify-between">
            <div>
              <h3 className="text-white-default text-lg-19-19">{userData.fullName}</h3>
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden min-w-12">
              <img
                src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.avatar/0/0/35/18380/9410632.jpg?v=10&w=200&h=200"
                alt="User Avatar"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          </div>

          {/* Statistics */}
          <div className="flex justify-start mt-3">
            <div className="flex items-center mr-4">
              <img
                src="https://waka.vn/svgs/icon-soi.svg"
                alt="icon-soi"
                className="cursor-pointer"
              />
              <span className="text-comic-500 ml-1">0</span>
            </div>
            <div className="flex items-center">
              <img
                src="https://waka.vn/svgs/icon-la.svg"
                alt="icon-la"
                className="cursor-pointer"
              />
              <span className="text-waka-cdv ml-1">0</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex items-center">
            <button className="text-white-default py-2 rounded-full cursor-pointer flex items-center justify-center px-4 text-base-16-19 button-primary bg-waka-500 mr-2">
              Nạp sồi
            </button>
            <button className="text-white-default py-2 rounded-full cursor-pointer flex items-center justify-center w-full button-primary bg-waka-500">
              Trở thành hội viên
            </button>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-4">
          <ul>
            <li className="p-2 mb-2 text-waka-500 bg-white-overlay rounded-xl">
              <a href="/account/profile" className="flex">
                <img
                  src="https://waka.vn/svgs/icon-user-active.svg"
                  alt="icon-user-active"
                  className="cursor-pointer"
                />
                <span className="ml-3 text-sm-15-19">Quản lý tài khoản</span>
              </a>
            </li>
            <li className="p-2 mb-2 text-white-50">
              <a href="/account/bookcase" className="flex">
                <img
                  src="https://waka.vn/svgs/icon-account-white.svg"
                  alt="icon-account-white"
                  className="cursor-pointer"
                />
                <span className="ml-3 text-sm-15-19">Tủ sách cá nhân</span>
              </a>
            </li>
            <li className="p-2 mb-2 text-white-50">
              <a href="/account/achievements" className="flex">
                <img
                  src="https://waka.vn/svgs/icon-achievements-white.svg"
                  alt="icon-achievements-white"
                  className="cursor-pointer"
                />
                <span className="ml-3 text-sm-15-19">Thành tích</span>
              </a>
            </li>
            <li className="p-2 mb-2 text-white-50">
              <a href="/account/transaction-histories" className="flex">
                <img
                  src="https://waka.vn/svgs/icon-history-white.svg"
                  alt="icon-history-white"
                  className="cursor-pointer"
                />
                <span className="ml-3 text-sm-15-19">Lịch sử giao dịch</span>
              </a>
            </li>
            <li className="text-white-50 flex items-center p-2 mb-2 cursor-pointer">
              <img
                src="https://waka.vn/svgs/icon-phone-white.svg"
                alt="icon-phone-white"
                className="cursor-pointer"
              />
              <span className="ml-3 text-sm-15-19">Hỗ trợ khách hàng</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="account-content h-full pt-6">
        <div className="px-5">
          <h1 className="text-white-default text-2xl-26-26 font-medium mb-4">
            Quản lý thông tin
          </h1>

          {/* User Information */}
          <div className="mb-8 border-b border-white-overlay">
            <div className="flex gap-6 py-3 tabs">
              <p className="font-medium text-[19px] text-waka-500">
                Thông tin cá nhân
              </p>
              <p className="font-normal text-white-300">Tài khoản và bảo mật</p>
              <p className="font-normal text-white-300">Tài khoản liên kết</p>
            </div>
          </div>

          {/* Editable Information */}
          <div className="flex items-start max-w-[678px]">
            <div className="mr-20 flex-1">
              {/* Username */}
              <div className="px-4 py-2 border border-white-overlay bg-white-overlay rounded-xl mb-4">
                <p className="text-white-300 text-13-13 mb-1">Tên đăng nhập</p>
                <p className="text-white-50 text-15-15">{userData.username}</p>
              </div>

              {/* User ID */}
              <div className="px-4 py-2 border border-white-overlay bg-white-overlay rounded-xl mb-4">
                <p className="text-white-300 text-13-13 mb-1">ID người dùng</p>
                <p className="text-white-50 text-15-15">{userData.userId}</p>
              </div>

              {/* Full Name */}
              <div className="relative w-full h-14 border rounded-xl border-white-300">
                <input
                  type="text"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleInputChange}
                  className="input-focus-index input-auth text-white-50 bg-transparent w-full h-full top-0 left-0 absolute pt-4-5 outline-none px-3 text-base-16-19"
                />
                <label
                  htmlFor="fullname"
                  className="absolute left-3 text-13-13 z-2 block transition-all text-white-300 top-[8px] text-brand"
                >
                  Họ và tên
                </label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-white-overlay flex">
            <button
              onClick={handleUpdate}
              className="text-white-default py-2 rounded-full cursor-pointer flex items-center justify-center px-4 text-16-16 button-primary bg-waka-500"
            >
              Cập nhập
            </button>
            <button
              onClick={handleCancel}
              className="bg-white-overlay border border-white-overlay py-2 px-4 rounded-full text-white-default text-16-16 button-secondary whitespace-nowrap ml-4"
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
