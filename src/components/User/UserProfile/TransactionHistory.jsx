import React, { useState, useEffect } from "react";

const TransactionHistory = () => {
  const token = localStorage.getItem("authToken");

  const [transactionData, setTransactionData] = useState([]);
  const [vnPayData, setVnPayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Mua gói cước");

  const tabs = ["Mua gói cước", "Mua nội dung"];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [transactionResponse, vnPayResponse] = await Promise.all([
          fetch("http://localhost:8080/api/payment/get", {
            method: "GET",
            headers: { 
              "Content-Type": "application/json", 
              Authentication: `Bearer ${token}`,
            },
          }),
          fetch("http://localhost:8080/api/payments", {
            method: "GET",
            headers: { 
              "Content-Type": "application/json", 
              Authentication: `Bearer ${token}`,
            },
          }),
        ]);

        if (!transactionResponse.ok || !vnPayResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const transactionData = await transactionResponse.json();
        const vnPayData = await vnPayResponse.json();

        setTransactionData(transactionData);
        setVnPayData(vnPayData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderTransactionList = () => {
    if (transactionData.length === 0) {
      return (
        <div className="w-full text-center h-[263px] flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src="https://waka.vn/svgs/icon-empty.svg"
              alt="icon-empty"
              className="cursor-pointer"
            />
            <p className="font-medium text-base text-gray-700 pb-2 pt-6">
              Bạn chưa có giao dịch nào
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="transaction-list mt-0">
        {transactionData.map((transaction) => (
          <div
            key={transaction.transactionId}
            className="border-b border-gray-700 py-4 flex justify-between items-center mt-0"
          >
            <div>
              <p className="text-gray-600 text-lg">
                Mã giao dịch: {transaction.transactionId}
              </p>
              <p className="text-gray-500 text-sm">
                Thời gian: {transaction.paymentTime}
              </p>
            </div>
            <div>
              <p className="text-yellow-500 font-semibold">
                {parseInt(transaction.totalPrice).toLocaleString()} Point
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderVnPayList = () => {
    if (vnPayData.length === 0) {
      return (
        <div className="w-full text-center h-[263px] flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src="https://waka.vn/svgs/icon-empty.svg"
              alt="icon-empty"
              className="cursor-pointer"
            />
            <p className="font-medium text-base text-gray-700 pb-2 pt-6">
              Bạn chưa có giao dịch nào
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="transaction-list mt-0">
        {vnPayData.map((transaction) => (
          <div
            key={transaction.transactionId}
            className="border-b border-gray-700 py-4 flex justify-between items-center mt-0"
          >
            <div>
              <p className="text-gray-600 text-lg">
                Mã giao dịch: {transaction.transactionId}
              </p>
              <p className="text-gray-500 text-sm">
                Thời gian: {transaction.paymentTime}
              </p>
            </div>
            <div>
              <p className="text-yellow-500 font-semibold">
                {parseInt(transaction.totalPrice).toLocaleString()} VNĐ
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="account-content h-full pt-6 px-5 text-white">
      <h1 className="text-white-50 text-2xl font-bold mb-4">Lịch sử giao dịch</h1>

      {/* Tabs */}
      <div className="flex gap-6 py-3">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer flex items-center ${
              activeTab === tab
                ? "font-medium text-[19px] text-waka-500"
                : "text-white-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <p>{tab}</p>
          </div>
        ))}
      </div>

      {/* Transaction Section */}
      <section className="py-10 transaction mt-6 text-gray-500">
        {activeTab === "Mua nội dung"
          ? renderTransactionList()
          : renderVnPayList()}
      </section>
    </div>
  );
};

export default TransactionHistory;
