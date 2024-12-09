import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { become_author, get_author_info, count_follows, count_recommend_books} from "../../../services/AuthorService";
import SideBar from "../Sidebar/index";
import MainContent from "../AuthorProfile/index";
import CustomerSupport from "../../CustomerSupport/CustomerSupport";
import { useNavigate } from "react-router-dom";
import { count_books_by_author } from "../../../services/BookService";
import {get_user_points} from "../../../services/UserService";

const AuthorProfile = () => {
    const navigate = useNavigate();
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


    const count_recommend_books_a = async () => {
        try {
            const count = await count_recommend_books();
            setRecommendBooks(count);
            console.log("Recommend", count); 
        } catch (error) {
            console.log("Error fetching recommend books count:", error);
        
        }
    }

    const countFollowers = async () => {
        try {
            const count = await count_follows();
            setFollows(count);
        } catch (error) {
            console.error("Error fetching followers count:", error);
            
        }
    }

    const fetchBookWritten = async () => {
        try {
            const count = await count_books_by_author();

            console.log("Books written by author:", count);
            setBookWritten(count);
        } catch (error) {
            console.error("Error fetching books written by author:", error);
            
        }
    }

    const fetchUserPoints = async () => {
        try {
            const points = await get_user_points();

            console.log("User points:", points);
            setUserPoints(points);
        } catch (error) {
            console.error("Error fetching user points:", error);
            
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
        
        }
    };

    const handleAuthorSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await become_author(userData);
            alert("Author status updated successfully");
            setLoading(false);
        } catch (error) {
            console.error("Error updating author status:", error);
            alert("An error occurred while updating author status.");
            setLoading(false);
        }
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleClick = () => {
        navigate("/payment"); 
    };


    useEffect(() => {
        fetchUserData();
        fetchUserPoints();
        fetchBookWritten();
        countFollowers();
        count_recommend_books_a();
    }, []);

    return (

        <div className="min-h-screen bg-gray-800 text-white">
            {/* Header */}
            <Header />
            <hr className="" />

            <div className="container mx-auto px-6 py-10 pt-40">
                <div className="flex space-x-0">
                    {/* Sidebar */}
                    <SideBar setActiveContent={setActiveContent} activeContent={activeContent} setIsSupportVisible={setIsSupportVisible} handleClick={handleClick} userData={userData} savedFullname={savedFullname} userPoints={userPoints}/>

                    {/* Main Content */}
                    <MainContent activeContent={activeContent} userData={userData} handleChange={handleChange} loading={loading} handleAuthorSubmit={handleAuthorSubmit} bookWritten={bookWritten} follows={follows} recommendBooks={recommendBooks}/>
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
