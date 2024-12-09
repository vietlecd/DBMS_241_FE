import React, { useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const location = useLocation();
    const [paymentData, setPaymentData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const paymentInfo = params.get('paymentInfo');

        if (paymentInfo) {
            setPaymentData(JSON.parse(decodeURIComponent(paymentInfo)));
        }
    }, [location]);


    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8">
                <div className="flex justify-center mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
                    Thanh Toán Thành Công!
                </h2>

                <p className="text-center text-gray-600 mb-6">
                    Cảm ơn bạn đã thực hiện giao dịch. Dưới đây là chi tiết thanh toán của bạn:
                </p>

                {paymentData && (
                    <div className="bg-gray-100 p-4 rounded-lg mb-6">
                        <h3 className="text-xl font-medium text-gray-800 mb-3">Thông Tin Thanh Toán</h3>
                        <ul className="space-y-2">
                            <li><span className="font-bold">Mã giao dịch:</span> {paymentData.transactionId}</li>
                            <li><span className="font-bold">Số tiền:</span> {paymentData.totalPrice} VND</li>
                            <li><span className="font-bold">Ngày giao dịch:</span> {paymentData.paymentTime}</li>
                        </ul>
                    </div>
                )}

                <div className="text-center">
                    <button onClick={() => navigate("/")} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        Quay lại trang chủ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
