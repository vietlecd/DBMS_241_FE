import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import AuthorBook from "../AuthorBook";

const AuthorProfile = () => {
    const token = localStorage.getItem('authToken');
    const [userData, setUserData] = useState({
        fullname: "",
        id_card: "",
        bio: "",
    });
    const [activeContent, setActiveContent] = useState("profile"); // Track active content
    const [loading, setLoading] = useState(false);
    const [savedFullname, setSavedFullname] = useState("");
    const [isSupportVisible, setIsSupportVisible] = useState(false);

    const fetchUserData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/author/info", {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json" ,
                    Authorization: `Bearer ${token}`,
                },
                
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleClick = () => {
        window.location.href = "http://localhost:5173/payment";
    };

    const handleAuthorSubmit = async (authorFormData) => {
        try {
            const response = await fetch("http://localhost:8080/api/author/become", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(authorFormData),
            });

            if (!response.ok) {
                const errorData = await response.text();
                alert(`Error: ${errorData || "Failed to submit author form"}`);
                return;
            }

            alert("Bạn đã trở thành tác giả thành công!");
            setIsAuthorFormVisible(false);
        } catch (error) {
            console.error("Error submitting author form:", error);
            alert("An error occurred while submitting the author form.");
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (

        <div className="min-h-screen bg-gray-800 text-white">
            {/* Header */}
            <Header />
            <hr className=""/>

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
                            <div className="mt-4 flex space-x-8 ml-36">
                                <button className="px-4 py-2 bg-green-400 hover:bg-green-600 text-white font-semibold rounded-lg"
                                    onClick={handleClick}>
                                    Nạp Point
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
                                    <span className="ml-3">Tủ sách tác giả</span>
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
                            <div className="p-7">
                                <div className="flex p-1 gap-2">
                                    <i class="bi bi-award text-red-400 text-3xl"></i>
                                    <span className="text-2xl font-semibold"> Thành tích </span>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="py-6">
                                        <div className="px-6 py-5 flex justify-between round-lg border border-red-300 hover:border-red-600">
                                            <i class="bi bi-book text-red-600 text-4xl"></i>
                                            <div className="text-center">
                                                <p className="text-2xl text-white"> 0 </p>
                                                <p className="text-xl text-white"> Truyện đã đăng </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="py-6">
                                        <div className="px-6 py-5 flex justify-between round-lg border border-red-300 hover:border-red-600">
                                            <i class="bi bi-people text-red-600 text-4xl"></i>
                                            <div className="text-center">
                                                <p className="text-2xl text-white"> 0 </p>
                                                <p className="text-xl text-white"> Người theo dỗi </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-6">
                                        <div className="px-6 py-5 flex gap-20 round-lg border border-red-300 hover:border-red-600">
                                            <i class="bi bi-envelope-heart text-red-600 text-4xl"></i>
                                            <div className="text-center">
                                                <p className="text-2xl text-white"> 0 </p>
                                                <p className="text-xl text-white"> Sách đề cử </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full pb-14 flex justify-between">
                                    <div>
                                        <div className="flex p-1 gap-2">
                                            <i class="bi bi-person text-3xl text-red-400"></i>
                                            <h1 className="text-2xl font-semibold">Thông tin cá nhân</h1>
                                        </div>
                                        <div className="p-6 rounded-lg space-y-4 max-w-md">
                                            <div className="px-0 py-1 rounded-lg flex justify-between">
                                                <label className="text-gray-400 text-sm w-[300px]">Họ và tên</label>
                                                <input
                                                    type="text"
                                                    name="fullname"
                                                    value={userData.fullname ? userData.fullname : ""}
                                                    onChange={handleChange}
                                                    className="bg-gray-700 text-white w-full rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div className="px-0 py-1 rounded-lg flex justify-between">
                                                <label className="text-gray-400 text-sm w-[300px]">
                                                    Giới thiệu
                                                </label>
                                                <input
                                                    type="text"
                                                    name="bio"
                                                    value={userData.bio ? userData.bio : ""}
                                                    onChange={handleChange}
                                                    className="bg-gray-700 text-white w-full rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div className="px-0 py-1 rounded-lg flex justify-between">
                                                <label className="text-gray-400 text-sm w-[300px]">
                                                    Số Căn Cước Công Dân
                                                </label>
                                                <input
                                                    type="text"
                                                    name="id_card"
                                                    value={userData.id_card ? userData.id_card : ""}
                                                    onChange={handleChange}
                                                    className="bg-gray-700 text-white w-full rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 rounded-2xl">
                                        <div className="flex text-sm text-center">
                                            <button
                                                onClick={handleAuthorSubmit}
                                                className={` bg-red-400 rounded-xl p-4 hover:bg-red-600 text-white font-semibold ${loading ? "opacity-50 cursor-not-allowed" : ""
                                                    }`}
                                                disabled={loading}
                                            >
                                                {loading ? "Đang cập nhật..." : "Đăng kí trở thành tác giả"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeContent === "books" && <AuthorBook />}
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

export default AuthorProfile;
