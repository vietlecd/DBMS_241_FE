import React from "react";

const CustomerSupport = () => {
  return (
    <div className="flex flex-col items-center text-center px-2 -inset-0 bg-gray-800 text-white rounded-lg scale-90">
      <h1 className="text-2xl font-bold mb-4">Bạn cần hỗ trợ</h1>
      <p className="text-gray-400 mb-8">
        Liên hệ với chúng tôi thông qua các kênh hỗ trợ:
      </p>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button className="flex items-center justify-center bg-gray-700 border border-gray-600 py-2 px-4 rounded-full">
          <img
            src="https://waka.vn/svgs/icon-messenger.svg"
            alt="Messenger"
            className="w-6 h-6 mr-2"
          />
          Messenger
        </button>
        <button className="flex items-center justify-center bg-gray-700 border border-gray-600 py-2 px-4 rounded-full">
          <img
            src="https://waka.vn/svgs/icon-zalo.svg"
            alt="Zalo"
            className="w-6 h-6 mr-2"
          />
          Zalo
        </button>
      </div>
      <p className="text-gray-400 mb-4">Hoặc liên hệ qua:</p>
      <div className="space-y-4">
        <button className="flex items-center justify-start bg-gray-700 border border-gray-600 py-2 px-4 rounded-full w-full">
          <img
            src="https://waka.vn/svgs/icon-telephone.svg"
            alt="Hotline"
            className="w-6 h-6 mr-2"
          />
          Hotline: 08777354454
        </button>
        <button className="flex items-center justify-start bg-gray-700 border border-gray-600 py-2 px-4 rounded-full w-full">
          <img
            src="https://waka.vn/svgs/icon-help-white.svg"
            alt="Tổng đài"
            className="w-6 h-6 mr-2"
          />
          Tổng đài: 0901847726
        </button>
        <button className="flex items-center justify-start bg-gray-700 border border-gray-600 py-2 px-4 rounded-full w-full">
          <img
            src="https://waka.vn/svgs/icon-email.svg"
            alt="Email"
            className="w-6 h-6 mr-2"
          />
          Email: support@bookshop.vn
        </button>
      </div>
    </div>
  );
};

export default CustomerSupport;
