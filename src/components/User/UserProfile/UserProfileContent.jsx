import React from "react";
import PropTypes from "prop-types";
import UserBooks from "../UserBook";
import UserTransactions from "../Transactions/TransactionHistory";

const UserProfileContent = ({
  activeContent,
  userData,
  handleChange,
  handleUpdate,
  handleCancel,
  loading,
}) => {
  return (
    <div className="flex-1 p-6">
      {activeContent === "profile" && (
        <div>
          <h1 className="ml-7 text-2xl font-bold mb-6">Quản lý thông tin</h1>
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
  );
};

UserProfileContent.propTypes = {
  activeContent: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UserProfileContent;