import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { become_author, get_author_info, count_book_written } from "../../../services/AuthorService";
import SideBar from "../Sidebar/index";
import MainContent from "../AuthorProfile/index";
import CustomerSupport from "../../CustomerSupport/CustomerSupport";
import { get_user_points } from "../../../services/UserService";
import { useNavigate } from "react-router-dom";

const AuthorProfile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fullname: "",
        id_card: "",
        bio: "",
    });

    const [userPoints, setUserPoints] = useState("");
    const [activeContent, setActiveContent] = useState("profile");
    const [loading, setLoading] = useState(false);
    const [savedFullname, setSavedFullname] = useState("");
    const [isSupportVisible, setIsSupportVisible] = useState(false);
    const [countBook, setCountBook] = useState(0);

    // Fetch số lượng sách
    const fetchCountBook = async () => {
        try {
            const count = await count_book_written();
            console.log("Count book written:", count);
            setCountBook(count);
        } catch (error) {
            console.error("Error fetching count book written:", error);
            alert("An error occurred while fetching count book written.");
        }
    };

    const fetchUserPoints = async () => {
        try {
            const points = await get_user_points();
            console.log("User points:", points);
            setUserPoints(points);
        } catch (error) {
            console.error("Error fetching user points:", error);
            alert("An error occurred while fetching user points.");
        }
    };

    const fetchUserData = async () => {
        try {
            const userData = await get_author_info();
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
        navigate("/payment");
    };

    // Fetch all data on component mount
    useEffect(() => {
        fetchUserData();
        fetchUserPoints();
        fetchCountBook();
    }, []);

    return (
        <div className="min-h-screen bg-gray-800 text-white">
            {/* Header */}
            <Header />
            <hr className="" />

            <div className="container mx-auto px-6 py-10 pt-40">
                <div className="flex space-x-0">
                    {/* Sidebar */}
                    <SideBar
                        setActiveContent={setActiveContent}
                        activeContent={activeContent}
                        setIsSupportVisible={setIsSupportVisible}
                        handleClick={handleClick}
                        userData={userData}
                        savedFullname={savedFullname}
                        userPoint={userPoints}
                    />

                    {/* Main Content */}
                    <MainContent
                        activeContent={activeContent}
                        userData={userData}
                        handleChange={handleChange}
                        loading={loading}
                        countBook={countBook}
                    />
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
