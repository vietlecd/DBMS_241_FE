import Header2 from "../Header/Header2";
import Footer from "../Footer";
import Data from "./Packages";
import { Link, Navigate, redirect } from "react-router-dom";

const packages = Data.slice(0, 8);

function PackageCard({ title, price, points }) {
    const handleClick = async () => {
        try {
            console.log("Nạp gói");

            const amount = parseInt(price.replace(/[^0-9]/g, ""), 10);

            console.log(amount);

            const response = await fetch(`http://localhost:8080/api/submitOrder?amount=${amount}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Failed to submit order");
            }

            const url = await response.text();
            console.log(url);
            window.location.href = url; 
        }
        catch (error) {
            console.error(error);
        }
}


return (
    <div className="h-fit rounded-xl divider-y divide flex flex-col items-center min-w-[273px] border opacity-1 border-gray-300 hover:border-[orange] active:bg-blue-600 transition-colors">
        <div className="bg-orange-500 px-6 py-1 rounded-b-lg">
            <p className="font-bold text-[13px] text-white">{title}</p>
        </div>
        <div className="pt-3">
            <img src="https://waka.vn/svgs/icon-oak.svg"
                alt="icon-oak"
                className="cursor-pointer w-full h-full">
            </img>
        </div>
        <div className="px-6 py-3">
            <p className="font-medium text-[19px] whitespace-nowrap text-white py-2">Gói Điểm {points}</p>
        </div>
        <div className="w-full text-center border-t border-white-overlay pt-4 pb-6 px-10">
            <p className={`text-[26px] font-medium text-white`}>{price}</p>
            <button className="w-full mt-3.5 bg-green-100-overlay border border-white-overlay py-3 rounded-full text-white-50 bg-slate-300 hover:bg-[#8bc6e8]"
                onClick={handleClick}>
                Nạp gói
            </button>
        </div>
    </div>
);
}

function VNPay() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header2 />
            {/* Background */}
            <div className="w-screen bg-cover bg-center bg-no-repeat relative">
                <img src="https://img.freepik.com/free-vector/new-moderen-background-abstract-colorfuel_125964-802.jpg?t=st=1732770218~exp=1732773818~hmac=d62421063d653f2943cdb08c33335ca54a5f805db6d1f20eed59baa53bca5e5f&w=1380"
                    alt="background"
                    className="w-full h-[250px] object-cover"
                >
                </img>
            </div>

            {/* Main content */}
            <div className="bg-gradient-to-r from-[#19193f] via-[#0a557a] to-[#1c1c1e] flex-1 flex flex-col justify-start py-10">
                <div className="ml-14 mt-7 justify-start mb-10">
                    <p className="font-medium text-[26px] text-white">
                        Chọn gói điểm bạn muốn nạp
                    </p>
                </div>
                <div className="ml-9 w-[600px] max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-80 px-4">
                    {packages.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            title={pkg.title}
                            price={pkg.price}
                            points={pkg.points}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default VNPay;
