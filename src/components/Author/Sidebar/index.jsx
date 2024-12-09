import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({
    savedFullname,
    userData,
    activeContent,
    setActiveContent,
    setIsSupportVisible,
    handleClick,
    userPoints,
}) => {
    const renderNavItem = (label, contentKey) => (
        <li
            className={`p-2 rounded-xl cursor-pointer ${activeContent === contentKey ? "bg-gray-700 text-green-400" : "hover:bg-gray-700"
                }`}
            onClick={() => setActiveContent(contentKey)}
            role="menuitem"
            aria-label={`Navigate to ${label}`}
        >
            <span className="ml-3">{label}</span>
        </li>
    );

    return (
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
                <div className="ml-3 flex flex-row gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift mt-[3.9px] text-green-400" viewBox="0 0 16 16">
                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                    </svg>
                    <span className="text-lg font-semibold text-white">
                        {userPoints || 0}
                    </span>
                </div>
                <div className="mt-4 flex space-x-8 ml-36">
                    <button
                        className="px-4 py-2 bg-green-400 hover:bg-green-600 text-white font-semibold rounded-lg"
                        onClick={handleClick}
                    >
                        Nạp Point
                    </button>
                </div>
            </div>
            <ul className="space-y-4">
                {renderNavItem("Quản lý tài khoản", "profile")}
                {renderNavItem("Tủ sách tác giả", "books")}
                <li
                    className="p-2 rounded-xl cursor-pointer hover:bg-gray-700"
                    onClick={() => setIsSupportVisible(true)}
                >
                    <span className="ml-3">Hỗ trợ khách hàng</span>
                </li>
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    savedFullname: PropTypes.string.isRequired,
    userData: PropTypes.object.isRequired,
    activeContent: PropTypes.string.isRequired,
    setActiveContent: PropTypes.func.isRequired,
    setIsSupportVisible: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    userPoints: PropTypes.number.isRequired,
};

export default Sidebar;
