import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-3 flex items-center justify-between rounded-b-lg shadow-md">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="w-24 h-auto" />

      {/* Wallet + Icons */}
      <div className="flex items-center gap-4">
        <div className="bg-yellow-300 text-black font-bold text-sm px-3 py-1 rounded-full shadow">
          ₹ 24.2
        </div>
        <FaBell className="text-white text-xl cursor-pointer hover:scale-110 transition-transform" />
        <FaUserCircle className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </div>
  );
};

export default Header;
