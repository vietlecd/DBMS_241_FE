import React from "react";
import { Link } from "react-router-dom";

const UserProfileSidebar = ({ savedFullname, userData }) => {
  return (
    <div className="min-w-[273px] border-r border-white-overlay sticky top-[50px] left-0 h-[80vh] p-6 pl-0">
            <div className="border-b border-gray-700 pb-4 mb-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{savedFullname}</h3>
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={
                      "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.avatar/0/0/35/18380/9410632.jpg?v=10&w=200&h=200"
                    }
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
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
                className={`p-2 rounded-xl cursor-pointer ${
                  activeContent === "profile"
                    ? "bg-gray-700 text-yellow-500"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveContent("profile")}
              >
                <div className="flex items-center">
                  <img
                    src="https://waka.vn/svgs/icon-user-active.svg"
                    alt="icon-user-active"
                  />
                  <span className="ml-3">Quản lý tài khoản</span>
                </div>
              </li>
              <li
                className={`p-2 rounded-xl cursor-pointer ${
                  activeContent === "books"
                    ? "bg-gray-700 text-yellow-500"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveContent("books")}
              >
                <div className="flex items-center">
                  <img
                    src="https://waka.vn/svgs/icon-account-white.svg"
                    alt="icon-order"
                  />
                  <span className="ml-3">Tủ sách cá nhân</span>
                </div>
              </li>
            </ul>
          </div>
  );
};

export default UserProfileSidebar;