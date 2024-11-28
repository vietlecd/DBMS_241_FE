import React from "react";
import { useEffect, useState, useNavigate } from "react";

const PaymentFailure = () => {
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
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400 via-yellow-500 to-pink-600">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8">
                <div className="flex justify-center mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 6L6 18M6 6l12 12"
                        />
                    </svg>
                </div>

                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
                    Thanh Toán Thất Bại!
                </h2>

                <p className="text-center text-gray-600 mb-6">
                    Rất tiếc, giao dịch của bạn đã không thành công. Vui lòng kiểm tra lại thông tin thanh toán hoặc thử lại sau.
                </p>

                {paymentData && (
                    <div className="bg-gray-100 p-4 rounded-lg mb-6">
                        <h3 className="text-xl font-medium text-gray-800 mb-3">Lý Do Thất Bại</h3>
                        <ul className="space-y-2">
                            <li><span className="font-bold">Lý do:</span> Thẻ tín dụng bị từ chối</li>
                            <li><span className="font-bold">Mã giao dịch:</span> {paymentData.transactionId}</li>
                            <li><span className="font-bold">Số tiền:</span> {paymentData.totalPrice} VND</li>
                            <li><span className="font-bold">Ngày giao dịch:</span> {paymentData.paymentTime}</li>
                        </ul>
                    </div>
                )}

                <div className="text-center">
                    <button onClick={() => navigate("/")} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        Quay lại trang chủ
                    </button>
                    <p className="mt-4 text-gray-600">
                        Nếu vấn đề vẫn tiếp diễn, vui lòng liên hệ với chúng tôi qua <a href="mailto:support@website.com" className="text-blue-600">email hỗ trợ</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailure;
