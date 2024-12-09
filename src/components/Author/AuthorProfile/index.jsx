import React from "react";
import PropTypes from "prop-types";
import AuthorBook from "../AuthorBook/index";

const MainContent = ({ activeContent, userData, handleChange, handleAuthorSubmit, loading, countBook }) => {
    return (
        <div className="flex-1 p-6">
            {activeContent === "profile" && (
                <div className="p-7">
                    <div className="flex p-1 gap-2">
                        <i className="bi bi-award text-red-400 text-3xl"></i>
                        <span className="text-2xl font-semibold">Thành tích</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="py-6">
                            <div className="px-6 py-5 flex justify-between rounded-lg border border-red-300 hover:border-red-600">
                                <i className="bi bi-book text-red-600 text-4xl"></i>
                                <div className="text-center">
                                    <p className="text-2xl text-white">{countBook ? countBook : 0}</p>
                                    <p className="text-xl text-white">Truyện đã đăng</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-6">
                            <div className="px-6 py-5 flex justify-between rounded-lg border border-red-300 hover:border-red-600">
                                <i className="bi bi-people text-red-600 text-4xl"></i>
                                <div className="text-center">
                                    <p className="text-2xl text-white">0</p>
                                    <p className="text-xl text-white">Người theo dõi</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-6">
                            <div className="px-6 py-5 flex justify-between rounded-lg border border-red-300 hover:border-red-600">
                                <i className="bi bi-envelope-heart text-red-600 text-4xl"></i>
                                <div className="text-center">
                                    <p className="text-2xl text-white">0</p>
                                    <p className="text-xl text-white">Sách đề cử</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pb-14">
                        <div className="flex p-1 gap-2">
                            <i className="bi bi-person text-3xl text-red-400"></i>
                            <h1 className="text-2xl font-semibold">Thông tin cá nhân</h1>
                        </div>
                        <div className="space-y-4 mt-4 max-w-md">
                            <div>
                                <label className="text-gray-400">Họ và tên</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={userData.fullname || ""}
                                    onChange={handleChange}
                                    className="bg-gray-700 text-white w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="text-gray-400">Giới thiệu</label>
                                <input
                                    type="text"
                                    name="bio"
                                    value={userData.bio || ""}
                                    onChange={handleChange}
                                    className="bg-gray-700 text-white w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="text-gray-400">Số Căn Cước Công Dân</label>
                                <input
                                    type="text"
                                    name="id_card"
                                    value={userData.id_card || ""}
                                    onChange={handleChange}
                                    className="bg-gray-700 text-white w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <button
                            onClick={handleAuthorSubmit}
                            className={`mt-4 px-4 py-2 bg-red-400 rounded-lg hover:bg-red-600 text-white ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={loading}
                        >
                            {loading ? "Đang cập nhật..." : "Đăng kí trở thành tác giả"}
                        </button>
                    </div>
                </div>
            )}
            {activeContent === "books" && <AuthorBook />}
        </div>
    );
};

MainContent.propTypes = {
    activeContent: PropTypes.string.isRequired,
    userData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAuthorSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    countBook: PropTypes.number.isRequired,
};

export default MainContent;
