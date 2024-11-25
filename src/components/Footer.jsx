import React from "react";

const Footer = () => {
    return(
        <footer className="bg-gray-900 flex h-1/5 w-full" >
            <div className="   justify-evenly cursor-pointer text-red-500 max-w-48 ">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                    id="logo"
                    src="/a_1-removebg-preview.png"
                    alt="Book Shop Logo"
                    className="h-12 mr-2 bg-transparent"
                    />
                    <h6 className="font-bold text-red-500 text-lg">Book Shop</h6>
                </div>
                <p>Read everything you want, earn from what you write.</p>
            </div>
            <nav className=" flex justify-items-center items-center space-x-5 mx-auto text-white">
                <div>
                    <h3>About us</h3>
                    <a className=" "></a>
                </div>
                <div>
                    <h3>Return & Replacement</h3>
                    <a></a>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <a className=""></a>
                </div>
                <div>
                    <h3>Terms & Condition</h3>
                </div>
                <div>
                    <h3>Privacy Policy</h3>
                </div>
                <div>
                    <h3>Cancellation/Refund Policy</h3>
                </div>

            </nav>
        </footer>
    );
}

export default Footer;