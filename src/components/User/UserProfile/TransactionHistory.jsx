import React, { useState } from "react";

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState("Mua gói cước");

  const tabs = ["Mua gói cước", "Mua nội dung"];

  return (
    <div className="account-content h-full pt-6 px-5 text-white bg-black">
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
      <section className="bg-black py-10 transaction mt-6 text-gray-500">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
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
                <p className="font-normal text-[15px] text-gray-500">
                  Thông tin giao dịch mua gói hội viên sẽ hiển thị tại đây
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransactionHistory;
