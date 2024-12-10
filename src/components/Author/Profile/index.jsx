import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { become_author, get_author_info, count_follows, count_recommend_books } from "../../../services/AuthorService";
import SideBar from "../Sidebar/index";
import MainContent from "../AuthorProfile/index";
import CustomerSupport from "../../CustomerSupport/CustomerSupport";
import { useNavigate } from "react-router-dom";
import { count_books_by_author } from "../../../services/BookService";
import { get_user_points } from "../../../services/UserService";

const AuthorProfile = () => {
    const navigate = useNavigate();

    // States
    const [userData, setUserData] = useState({
        fullname: "",
        id_card: "",
        bio: "",
    });
    const [activeContent, setActiveContent] = useState("profile");
    const [loading, setLoading] = useState(false);
    const [savedFullname, setSavedFullname] = useState("");
    const [isSupportVisible, setIsSupportVisible] = useState(false);
    const [bookWritten, setBookWritten] = useState(0);
    const [follows, setFollows] = useState(0);
    const [recommendBooks, setRecommendBooks] = useState(0);
    const [userPoints, setUserPoints] = useState(0);
    const [error, setError] = useState("");

    const logError = (message, error) => {
        console.error(message, error);
        setError(message);
    };

    const fetchAllData = async () => {
        setLoading(true);
        setError("");
        try {
            const [
                userInfo,
                points,
                booksCount,
                followsCount,
                recommendCount
            ] = await Promise.all([
                get_author_info(),
                get_user_points(),
                count_books_by_author(),
                count_follows(),
                count_recommend_books(),
            ]);

            setUserData(userInfo);
            setSavedFullname(userInfo.fullname);
            setUserPoints(points);
            setBookWritten(booksCount);
            setFollows(followsCount);
            setRecommendBooks(recommendCount);
        } catch (error) {
            logError("An error occurred while fetching data.", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAuthorSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await become_author(userData);
            alert("Author status updated successfully");
        } catch (error) {
            logError("An error occurred while updating author status.", error);
            alert("An error occurred while updating author status.");
        } finally {
            setLoading(false);
        }
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // Navigate to payment
    const handleClick = () => {
        navigate("/payment");
    };

    // Fetch all data on mount
    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-800 text-white">
            {/* Header */}
            <Header />
            <hr />

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
                        userPoints={userPoints}
                    />

                    {/* Main Content */}
                    <MainContent
                        activeContent={activeContent}
                        userData={userData}
                        handleChange={handleChange}
                        loading={loading}
                        handleAuthorSubmit={handleAuthorSubmit}
                        bookWritten={bookWritten}
                        follows={follows}
                        recommendBooks={recommendBooks}
                    />
                </div>
            </div>

            {/* Error Display */}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

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
